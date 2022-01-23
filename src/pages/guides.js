import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'

const GuidesPage = ({ data }) => {
  return (
    <Layout pageTitle="Guides">
      {
        data.allMdx.nodes.map((node) => (
          <article key={node.id}>
            <Link to={`/${node.slug}`}>
              {node.frontmatter.state}
            </Link>
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
          state
        }
        id
        slug
      }
    }
  }
`

export default GuidesPage
