// Extracts Q&A pairs from a guide's "## FAQs" markdown section so they can be
// rendered as FAQPage structured data alongside the MDXRenderer output.
export function parseFaqs(body) {
  if (!body) return []

  const startMatch = body.match(/^## FAQs[ \t]*\n/m)
  if (!startMatch) return []

  const sectionStart = startMatch.index + startMatch[0].length
  const afterFaqs = body.slice(sectionStart)
  const nextSectionIdx = afterFaqs.search(/\n## /)
  const section = nextSectionIdx === -1 ? afterFaqs : afterFaqs.slice(0, nextSectionIdx)

  const headingMatches = [...section.matchAll(/^### (.+)\n/gm)]

  return headingMatches
    .map((match, i) => {
      const question = match[1].trim()
      const answerStart = match.index + match[0].length
      const answerEnd = i + 1 < headingMatches.length ? headingMatches[i + 1].index : section.length
      const answer = section
        .slice(answerStart, answerEnd)
        .replace(/<[^>]+>/g, '')
        .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
        .replace(/\*\*([^*]+)\*\*/g, '$1')
        .replace(/\s+/g, ' ')
        .trim()
      return { question, answer }
    })
    .filter((faq) => faq.question && faq.answer)
}
