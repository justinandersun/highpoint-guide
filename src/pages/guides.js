import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import {
  guideTitle,
  stateGuides,
  guideLink,
} from '../components/guide.module.css'

const GuidesPage = ({ data }) => {
  return (
    <Layout pageTitle="Guides">
      <h1 className={guideTitle}>Highpoint Guides</h1>
      <div className={stateGuides}>
      {
        data.allMdx.nodes.map((node) => (
          <div>
            <article key={node.id}>
              <Link className={guideLink} to={`/${node.slug}`}>
                {node.frontmatter.state}
              </Link>
            </article>
          </div>
        ))
      }
      </div>
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
