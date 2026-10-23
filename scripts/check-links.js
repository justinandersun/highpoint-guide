#!/usr/bin/env node
// Checks every external link in the state guides (src/guides/*.mdx) and reports
// dead links and links that now redirect to a different website -- the pattern
// of a hijacked domain. Run it with `npm run check-links`. No dependencies;
// needs Node 18+ for the built-in fetch.

const fs = require('fs')
const path = require('path')

const GUIDES_DIR = path.join(__dirname, '..', 'src', 'guides')
const FRONTMATTER_FIELDS = ['official_info', 'weather', 'webcam', 'snow', 'wikipedia', 'peakbagger', 'summitpost']
const CONCURRENCY = 5
const TIMEOUT_MS = 15000
const MAX_REDIRECTS = 10
const USER_AGENT =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36'

// Redirects between these sites are expected, not hijacks: [from site, to site].
const ALLOWED_SITE_MOVES = [
  ['goo.gl', 'google.com'], // Google Maps short links
  ['twitter.com', 'x.com'],
]

const VERBOSE = process.argv.includes('--verbose')

// Network error codes: the domain or server is gone vs. the server refused a script.
const DEAD_ERRORS = ['ENOTFOUND', 'ECONNREFUSED', 'ERR_TLS_CERT_ALTNAME_INVALID', 'CERT_HAS_EXPIRED', 'too many redirects']
const BLOCKED_ERRORS = ['UND_ERR_SOCKET', 'ECONNRESET']

// "https://www.fs.usda.gov/r06/..." -> "usda.gov". A rough "same website" test:
// subdomain changes (www.nps.gov -> home.nps.gov) aren't treated as hijacks.
const site = (hostname) => hostname.replace(/^www\./, '').split('.').slice(-2).join('.')

// Ignore differences that don't change the page: http vs https, www, trailing slash.
const normalize = (url) => {
  const u = new URL(url)
  return `${u.hostname.replace(/^www\./, '')}${u.pathname.replace(/\/$/, '')}${u.search}`
}

// Links copied from embed codes contain HTML entities (&amp;, &#39;).
const decodeEntities = (s) =>
  s.replace(/&amp;/g, '&').replace(/&#39;|&#x27;|&apos;/g, "'").replace(/&quot;/g, '"')

// --- 1. Collect links, remembering where each one came from ---------------

function collectLinks() {
  const links = new Map() // url -> ["ak · official_info", ...]
  const add = (url, where) => {
    if (!/^https?:\/\//.test(url)) return
    if (!links.has(url)) links.set(url, [])
    links.get(url).push(where)
  }

  for (const file of fs.readdirSync(GUIDES_DIR).filter((f) => f.endsWith('.mdx')).sort()) {
    const code = path.basename(file, '.mdx')
    const text = fs.readFileSync(path.join(GUIDES_DIR, file), 'utf8')
    const [, frontmatter = '', body = ''] = text.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/) || []

    for (const field of FRONTMATTER_FIELDS) {
      const m = frontmatter.match(new RegExp(`^${field}: *"([^"]*)"`, 'm'))
      if (m && m[1] !== 'na') add(m[1], `${code} · ${field}`)
    }
    for (const m of body.matchAll(/(?:href|src)="([^"]+)"/g)) add(decodeEntities(m[1]), `${code} · body`)
    for (const m of body.matchAll(/\]\((https?:\/\/[^)\s]+)\)/g)) add(m[1], `${code} · body`)
  }
  return links
}

// --- 2. Check one link, following redirects hop by hop --------------------

// Network errors and timeouts are often one-off glitches, so retry those once.
async function check(url) {
  const first = await checkOnce(url)
  return first.error ? checkOnce(url) : first
}

async function checkOnce(url) {
  let current = url
  for (let hop = 0; hop <= MAX_REDIRECTS; hop++) {
    let res
    try {
      res = await fetch(current, {
        redirect: 'manual',
        headers: { 'User-Agent': USER_AGENT, Accept: 'text/html,*/*' },
        signal: AbortSignal.timeout(TIMEOUT_MS),
      })
    } catch (err) {
      const reason = err.name === 'TimeoutError' ? 'timed out' : (err.cause && err.cause.code) || err.message
      return { url, final: current, status: null, error: reason }
    }
    res.body?.cancel().catch(() => {}) // only the status and headers matter
    const location = res.headers.get('location')
    if (res.status >= 300 && res.status < 400 && location) {
      current = new URL(location, current).toString()
      continue
    }
    return { url, final: current, status: res.status }
  }
  return { url, final: current, status: null, error: 'too many redirects' }
}

// --- 3. Classify the result ------------------------------------------------

function classify({ url, final, status, error }) {
  const from = site(new URL(url).hostname)
  const to = site(new URL(final).hostname)
  const allowedMove = ALLOWED_SITE_MOVES.some(([a, b]) => from === a && to === b)

  if (from !== to && !allowedMove) return { level: 'hijack', note: `${from} → ${to}` }
  // Only errors that mean "this site doesn't exist" count as dead. Some servers
  // simply drop connections from scripts (but serve browsers fine), so resets
  // count as blocked, and timeouts as a possibly temporary error.
  if (error && DEAD_ERRORS.includes(error)) return { level: 'dead', note: error }
  if (error && BLOCKED_ERRORS.includes(error)) return { level: 'blocked', note: error }
  if (error) return { level: 'error', note: error }
  if (status === 404 || status === 410) return { level: 'dead', note: `HTTP ${status}` }
  // 403/429 almost always means the site refuses automated requests (AllTrails,
  // SummitPost, Peakbagger, and some agency sites), not that the page is gone.
  if (status === 403 || status === 429) return { level: 'blocked', note: `HTTP ${status}` }
  if (status >= 400) return { level: 'error', note: `HTTP ${status}` }
  if (normalize(url) !== normalize(final) && !allowedMove) return { level: 'moved', note: `now ${final}` }
  return { level: 'ok' }
}

// --- 4. Run and report -----------------------------------------------------

const LEVELS = [
  ['hijack', '❌ HIJACK RISK — now redirects to a different website'],
  ['dead', '❌ DEAD'],
  ['error', '⚠️  ERROR — the site returned an error'],
  ['moved', '⚠️  MOVED — redirects to a different page on the same site'],
]

async function main() {
  const links = collectLinks()
  const urls = [...links.keys()]
  console.log(`Checking ${urls.length} unique links from ${fs.readdirSync(GUIDES_DIR).filter((f) => f.endsWith('.mdx')).length} guides...\n`)

  const results = []
  let next = 0
  await Promise.all(
    Array.from({ length: CONCURRENCY }, async () => {
      while (next < urls.length) {
        const result = await check(urls[next++])
        results.push({ ...result, ...classify(result), where: links.get(result.url) })
        process.stdout.write(`\r  ${results.length}/${urls.length}`)
      }
    })
  )
  process.stdout.write('\n\n')

  for (const [level, heading] of LEVELS) {
    const group = results.filter((r) => r.level === level).sort((a, b) => a.where[0].localeCompare(b.where[0]))
    if (!group.length) continue
    console.log(`${heading} (${group.length})`)
    for (const r of group) {
      console.log(`  ${r.where.join(', ')}`)
      console.log(`    ${r.url}`)
      console.log(`    ${r.note}`)
    }
    console.log()
  }

  // Blocked links are summarized by site; --verbose lists every one.
  const blocked = results.filter((r) => r.level === 'blocked')
  if (blocked.length) {
    console.log(`❔ BLOCKED — site refuses automated checks; spot-check by hand (${blocked.length})`)
    const bySite = {}
    for (const r of blocked) bySite[site(new URL(r.url).hostname)] = (bySite[site(new URL(r.url).hostname)] || 0) + 1
    for (const [name, n] of Object.entries(bySite).sort((a, b) => b[1] - a[1])) console.log(`  ${name}: ${n}`)
    if (VERBOSE) {
      for (const r of blocked.sort((a, b) => a.where[0].localeCompare(b.where[0]))) console.log(`  ${r.where.join(', ')}  ${r.url}`)
    } else {
      console.log('  (run with --verbose to list them)')
    }
    console.log()
  }

  const count = (level) => results.filter((r) => r.level === level).length
  console.log(
    `Summary: ${count('ok')} ok, ${count('hijack')} hijack risk, ${count('dead')} dead, ` +
      `${count('error')} error, ${count('moved')} moved, ${count('blocked')} blocked`
  )
  // Non-zero exit when something needs fixing, so this can gate a scheduled job later.
  process.exitCode = count('hijack') + count('dead') > 0 ? 1 : 0
}

main()
