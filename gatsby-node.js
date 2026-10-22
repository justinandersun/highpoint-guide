const path = require('path')

// Blog posts are created here with the classic createPages API, rather than
// the File System Route API the guide pages use (src/pages/{mdx.slug}.js) --
// both collections compile to the same `Mdx` GraphQL type, and that API
// isn't built to split one type across two different page templates by
// source folder. Filtering by `sourceInstanceName` here keeps the two
// collections (and their routes) completely independent.
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allFile(filter: { sourceInstanceName: { eq: "blog" } }) {
        nodes {
          childMdx {
            id
            slug
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild('Error loading blog posts', result.errors)
    return
  }

  const postTemplate = path.resolve('./src/templates/blogPost.js')

  result.data.allFile.nodes
    .filter((node) => node.childMdx)
    .forEach((node) => {
      createPage({
        path: `/blog/${node.childMdx.slug}/`,
        component: postTemplate,
        context: { id: node.childMdx.id },
      })
    })
}

// The guide pages' own File System Route API (src/pages/{mdx.slug}.js) scans
// every `Mdx` node regardless of source, so it also auto-creates an unwanted
// duplicate of each blog post at its bare slug (e.g. /welcome-to-the-blog/,
// rendered with the guide template, which doesn't fit blog posts and expects
// guide-only frontmatter). Delete just that duplicate here; the real post at
// /blog/<slug>/ created above is left alone.
exports.onCreatePage = async ({ page, actions, getNode }) => {
  if (page.path.startsWith('/blog/') || !page.context?.id) {
    return
  }
  const node = getNode(page.context.id)
  const parentFile = node?.parent ? getNode(node.parent) : null
  if (parentFile?.sourceInstanceName === 'blog') {
    actions.deletePage(page)
  }
}
