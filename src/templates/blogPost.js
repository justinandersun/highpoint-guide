import * as React from 'react'
import { graphql, Link } from 'gatsby'
import Helmet from 'react-helmet'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../components/layout'
import * as blog from '../components/blog.module.css'

const BlogPostTemplate = ({ data }) => {
  const { frontmatter, body, slug } = data.mdx

  return (
    <Layout pageTitle={frontmatter.title}>
      <Helmet>
        <meta name="description" content={frontmatter.description} />
        {frontmatter.keywords && <meta name="keywords" content={frontmatter.keywords} />}
        <link rel="canonical" href={`https://highpoint.guide/blog/${slug}/`} />
        <meta property="og:title" content={frontmatter.title} />
        <meta property="og:description" content={frontmatter.description} />
        <meta property="og:url" content={`https://highpoint.guide/blog/${slug}/`} />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: frontmatter.title,
            datePublished: frontmatter.date,
            description: frontmatter.description,
          })}
        </script>
      </Helmet>
      <div className={blog.postTitlehead}>
        <nav className={blog.breadcrumb} aria-label="Breadcrumb">
          <Link to="/">Home</Link> <span className={blog.breadcrumbSep}>&rarr;</span> <Link to="/blog/">Blog</Link>
        </nav>
        <h1 className={blog.postTitle}>{frontmatter.title}</h1>
        <p className={blog.postDate}>{frontmatter.displayDate}</p>
      </div>
      <div className={blog.postBody}>
        <MDXRenderer>{body}</MDXRenderer>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      slug
      body
      frontmatter {
        title
        date
        displayDate: date(formatString: "D MMM YYYY")
        description
        keywords
      }
    }
  }
`

export default BlogPostTemplate
