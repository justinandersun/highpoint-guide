import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import {
  masthead,
  mastheadTitle,
  mastheadSubtitle,
} from '../components/masthead.module.css'
import {
  stateGuides,
  guideLink,
} from '../components/guide.module.css'

const GuidesPage = ({ data }) => {
  return (
    <Layout pageTitle="Guides">
      <div className={masthead}>
        <h1 className={mastheadTitle}>Highpoint Guides</h1>
        <p className={mastheadSubtitle}>A guide for every state.</p>
      </div>
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
