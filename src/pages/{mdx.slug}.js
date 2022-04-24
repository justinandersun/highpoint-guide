import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import {
  guidePage,
  guideTitlehead,
  guideTitle,
  guideState,
  guideMasthead,
  mastheadImage,
  mastheadMetadata,
  guideMetadata,
  metadataCell,
  cellName,
  cellData,
  guideBody,
  guideFooter,
  guideFooterLink,
} from '../components/guide.module.css'

const GuidePost = ({ data }) => {
  const image = getImage(data.mdx.frontmatter.hp_image)

  return (
    <Layout pageTitle={data.mdx.frontmatter.state}>
      <div className={guideTitlehead}>
        <p className={guideTitle}>{data.mdx.frontmatter.highpoint}</p>
        <p className={guideState}>{data.mdx.frontmatter.state}</p>
      </div>
      <div className={guidePage}>
        <div className={guideMasthead}>
          <div className={mastheadImage}>
            <GatsbyImage
              image={image}
              alt={data.mdx.frontmatter.hp_image_alt}
            />
          </div>
          <div className={mastheadMetadata}>
            <div className={guideMetadata}>
            <div className={metadataCell}>
              <p className={cellName}>Elevation</p>
              <p className={cellData}>{data.mdx.frontmatter.elevation_feet} feet</p>
            </div>
              <div className={metadataCell}>
                <p className={cellName}>Location</p>
                <p className={cellData}>{data.mdx.frontmatter.location}</p>
              </div>
              <div className={metadataCell}>
                <p className={cellName}>Elevation Rank</p>
                <p className={cellData}>{data.mdx.frontmatter.rank_elevation} of 50</p>
              </div>
              <div className={metadataCell}>
                <p className={cellName}>Coordinates</p>
                <p className={cellData}>{data.mdx.frontmatter.lat} / {data.mdx.frontmatter.long}</p>
              </div>
              <div className={metadataCell}>
                <p className={cellName}>Martin Difficulty Rating</p>
                <p className={cellData}>{data.mdx.frontmatter.difficulty}</p>
              </div>
              <div className={metadataCell}>
                <p className={cellName}>Terrain</p>
                <p className={cellData}>{data.mdx.frontmatter.terrain}</p>
              </div>
              <div className={metadataCell}>
                <p className={cellName}>Route Distance</p>
                <p className={cellData}>{data.mdx.frontmatter.distance_miles} miles</p>
              </div>
              <div className={metadataCell}>
                <p className={cellName}>Vertical Gain</p>
                <p className={cellData}>{data.mdx.frontmatter.gain_feet} feet</p>
              </div>
              <div className={metadataCell}>
                <p className={cellName}>Route Type</p>
                <p className={cellData}>{data.mdx.frontmatter.route_type}</p>
              </div>
              <div className={metadataCell}>
                <p className={cellName}>Peak Climbing Season</p>
                <p className={cellData}>{data.mdx.frontmatter.season}</p>
              </div>
            </div>
          </div>
        </div>
        <div className={guideBody}>
          <MDXRenderer>
            {data.mdx.body}
          </MDXRenderer>
        </div>
        <div className={guideFooter}>
          <h2>Resources</h2>
          <p>
            <a className={guideFooterLink} href={data.mdx.frontmatter.wikipedia} target="_blank">Wikipedia</a>
            <a className={guideFooterLink} href={data.mdx.frontmatter.summitpost} target="_blank">Summitpost</a>
            <a className={guideFooterLink} href={data.mdx.frontmatter.peakbagger} target="_blank">Peakbagger</a>
            <a className={guideFooterLink} href={data.mdx.frontmatter.official_info} target="_blank">Official Info</a>
            <a className={guideFooterLink} href={data.mdx.frontmatter.weather} target="_blank">Weather</a>
          </p>
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
        location
        lat
        long
        rank_elevation
        elevation_feet
        difficulty
        terrain
        distance_miles
        gain_feet
        route_type
        season
        wikipedia
        summitpost
        peakbagger
        official_info
        weather
        hp_image_alt
        hp_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      body
    }
  }
`

export default GuidePost
