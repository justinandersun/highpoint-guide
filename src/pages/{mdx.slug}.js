import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../components/layout'

const GuidePost = ({ data }) => {
  return (
    <Layout pageTitle={data.mdx.frontmatter.state}>
      <p>{data.mdx.frontmatter.highpoint}</p>
      <p>Rank: {data.mdx.frontmatter.rank_elevation}</p>
      <MDXRenderer>
        {data.mdx.body}
      </MDXRenderer>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        state
        highpoint
        rank_elevation
      }
      body
    }
  }
`

export default GuidePost
