// gatsby-plugin-offline's service worker caches every .js file CacheFirst. If
// one ever gets registered on localhost:8000 (e.g. after a production build
// left public/sw.js behind, which `gatsby develop` then serves), it keeps
// handing the browser stale bundles and develop breaks with errors like
// "Cannot read properties of undefined (reading 'component---src-pages-...')".
// In develop, answer /sw.js with a worker that clears its caches, unregisters
// itself, and reloads open tabs -- so the browser recovers on its next update
// check. This runs before develop's static handler for public/, so it wins.
const SELF_DESTRUCTING_SW = `
self.addEventListener('install', () => self.skipWaiting())
self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys()
    await Promise.all(keys.map((key) => caches.delete(key)))
    await self.clients.claim()
    await self.registration.unregister()
    const clients = await self.clients.matchAll({ type: 'window' })
    clients.forEach((client) => client.navigate(client.url))
  })())
})
`

module.exports = {
    developMiddleware: (app) => {
      app.get('/sw.js', (req, res) => {
        res.set('Content-Type', 'application/javascript')
        res.set('Cache-Control', 'no-store')
        res.send(SELF_DESTRUCTING_SW)
      })
    },
    siteMetadata: {
      title: "U.S. Highpoint Guide",
      description: "An interactive guidebook for climbing all fifty U.S. state highpoints.",
      siteUrl: "https://highpoint.guide",
      image: "/og-image.png",
      tags: "highpoints, US state highpoints, highpointing guide, highpointing, highpointers, list of US highpoints",
      twitterUsername: "@justinandersun",
    },
    plugins: [
      "gatsby-plugin-image",
      "gatsby-plugin-sharp",
      {
        resolve: "gatsby-source-filesystem",
        options: {
          name: `guides`,
          path: `${__dirname}/src/guides`,
        },
      },
      // Kept separate from the guides above: a lighter frontmatter schema,
      // and its pages are created explicitly in gatsby-node.js rather than
      // via the File System Route API, so the two collections never collide.
      {
        resolve: "gatsby-source-filesystem",
        options: {
          name: `blog`,
          path: `${__dirname}/src/blog`,
        },
      },
      // Summit photos for the About page, queried by sourceInstanceName.
      {
        resolve: "gatsby-source-filesystem",
        options: {
          name: `journey`,
          path: `${__dirname}/src/images/journey`,
        },
      },
      "gatsby-plugin-mdx",
      "gatsby-transformer-sharp",
      "gatsby-plugin-react-helmet",
      // HTML Attributes
      {
        resolve: 'gatsby-plugin-html-attributes',
        options: {
          lang: 'en'
        },
      },
      // Google Analytics
      {
        resolve: `gatsby-plugin-google-gtag`,
        options: {
          trackingIds: [
          "G-QPB1CXCKKR",
          ],
          pluginConfig: {
            head: true
          },
        },
      },
      // Favicons / home screen install
      {
        resolve: 'gatsby-plugin-manifest',
        options: {
          name: 'U.S. Highpoint Guide',
          short_name: 'Highpoint Guide',
          start_url: '/',
          background_color: '#ffffff',
          theme_color: '#212121',
          display: 'standalone',
          lang: 'en',
          icon: 'src/images/logo.png',
          // Required so gatsby-plugin-offline's service worker can match these
          // icon URLs for caching -- it can't resolve cache-busted query strings.
          cache_busting_mode: 'none',
        },
      },
      // Offline support -- must come after gatsby-plugin-manifest so the
      // manifest/icons it generates are included in the precache. Production
      // builds only: its browser code calls loader APIs that rely on
      // window.___chunkMapping, which doesn't exist under `gatsby develop`.
      ...(process.env.NODE_ENV === 'production'
        ? [
            {
              resolve: 'gatsby-plugin-offline',
              options: {
                // Scans these pages' HTML for extra JS chunks to precache (e.g. the
                // shared guide-page template component) beyond the default app shell.
                precachePages: ['/*'],
              },
            },
          ]
        : []),
      // Sitemap
      "gatsby-plugin-sitemap",
    ],
}
