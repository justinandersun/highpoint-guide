import * as React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import Layout from '../../components/layout'
import PageHeader from '../../components/pageHeader'
import * as blog from '../../components/blog.module.css'

const BlogIndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { sourceInstanceName: { eq: "blog" } }) {
        nodes {
          childMdx {
            id
            slug
            frontmatter {
              title
              date
              displayDate: date(formatString: "D MMM YYYY")
              description
            }
          }
        }
      }
    }
  `)

  const posts = data.allFile.nodes
    .map((node) => node.childMdx)
    .filter(Boolean)
    .sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date))

  return (
    <Layout pageTitle="Blog">
      <PageHeader
        title="Blog"
        subtitle="Trip reports, gear notes, and highpointing deep dives"
        description="The Highpoint Guide blog: trip reports, gear reviews, and deeper dives into highpointing."
        canonical="https://highpoint.guide/blog/"
      />
      <div className={blog.postList}>
        {posts.map((post) => (
          <Link key={post.id} className={blog.postListItem} to={`/blog/${post.slug}/`}>
            <h2>{post.frontmatter.title}</h2>
            <p className={blog.postListDate}>{post.frontmatter.displayDate}</p>
            <p>{post.frontmatter.description}</p>
          </Link>
        ))}
      </div>
    </Layout>
  )
}

export default BlogIndexPage
