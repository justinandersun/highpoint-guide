import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../components/layout'

const GuidesPage = ({ data }) => {
  return (
    <Layout pageTitle="Guides">
      {
        data.allMdx.nodes.map((node) => (
          <article key={node.id}>
            <h2>{node.frontmatter.highpoint}</h2>
            <MDXRenderer>
              {node.body}
            </MDXRenderer>
          </article>
        ))
      }
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx {
      nodes {
        frontmatter {
          highpoint
        }
        id
        body
      }
    }
  }
`

export default GuidesPage
