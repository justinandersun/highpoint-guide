import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../components/layout'
import {
  guidePage,
  guideTitle,
  guideState,
  guideMetadata,
  guideBody,
} from '../components/guide.module.css'

const GuidePost = ({ data }) => {
  return (
    <Layout pageTitle={data.mdx.frontmatter.state}>
      <div className={guidePage}>
        <p className={guideTitle}>{data.mdx.frontmatter.highpoint}</p>
        <p className={guideState}>{data.mdx.frontmatter.state}</p>
        <div className={guideMetadata}>
          <p>Rank: {data.mdx.frontmatter.rank_elevation}</p>
          <p>Elevation: {data.mdx.frontmatter.elevation_feet} feet / {data.mdx.frontmatter.elevation_meters} meters</p>
          <p>Lat/Long: {data.mdx.frontmatter.lat} / {data.mdx.frontmatter.long}</p>
          <p>Difficulty: {data.mdx.frontmatter.difficulty}</p>
          <p>Season: {data.mdx.frontmatter.season}</p>
        </div>
        <div className={guideBody}>
          <MDXRenderer>
            {data.mdx.body}
          </MDXRenderer>
        </div>
      </div>
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
        elevation_feet
        elevation_meters
        lat
        long
        difficulty
        season
      }
      body
    }
  }
`

export default GuidePost
