import * as React from 'react'
import { graphql } from 'gatsby'
import Helmet from "react-helmet"
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import * as guides from '../components/guide.module.css'

const GuidePost = ({ data }) => {
  const image = getImage(data.mdx.frontmatter.hp_image)

  return (
    <Layout pageTitle={`${data.mdx.frontmatter.highpoint}, ${data.mdx.frontmatter.state}`}>
    <Helmet>
      <meta name="description" content={data.mdx.frontmatter.description} />
      <meta name="keywords" content={`${data.mdx.frontmatter.keywords}, ${data.mdx.frontmatter.highpoint} guide, highest point of ${data.mdx.frontmatter.state}, ${data.mdx.frontmatter.state} highpoint`} />
      <link rel="canonical" href={`https://highpoint.guide/${data.mdx.frontmatter.code}/`} />
    </Helmet>
      <div className={guides.guideTitlehead}>
        <p className={guides.guideTitle}>{data.mdx.frontmatter.highpoint}</p>
        <p className={guides.guideState}>{data.mdx.frontmatter.state}</p>
      </div>
      <div className={guides.guidePage}>
        <div className={guides.guideMasthead}>
          <div className={guides.mastheadImage}>
            <GatsbyImage
              image={image}
              alt={data.mdx.frontmatter.hp_image_alt}
            />
          </div>
          <div className={guides.mastheadMetadata}>
            <div className={guides.guideMetadata}>
            <div className={guides.metadataCell}>
              <p className={guides.cellName}>Elevation</p>
              <p className={guides.cellData}>{data.mdx.frontmatter.elevation_feet} feet</p>
            </div>
              <div className={guides.metadataCell}>
                <p className={guides.cellName}>Location</p>
                <p className={guides.cellData}>{data.mdx.frontmatter.location}</p>
              </div>
              <div className={guides.metadataCell}>
                <p className={guides.cellName}>Elevation Rank</p>
                <p className={guides.cellData}>{data.mdx.frontmatter.rank_elevation} of 50</p>
              </div>
              <div className={guides.metadataCell}>
                <p className={guides.cellName}>Coordinates</p>
                <p className={guides.cellData}>{data.mdx.frontmatter.lat} / {data.mdx.frontmatter.long}</p>
              </div>
              <div className={guides.metadataCell}>
                <p className={guides.cellName}>Martin Difficulty Rating</p>
                <p className={guides.cellData}>{data.mdx.frontmatter.difficulty}</p>
              </div>
              <div className={guides.metadataCell}>
                <p className={guides.cellName}>Terrain</p>
                <p className={guides.cellData}>{data.mdx.frontmatter.terrain}</p>
              </div>
              <div className={guides.metadataCell}>
                <p className={guides.cellName}>Route Distance</p>
                <p className={guides.cellData}>{data.mdx.frontmatter.distance_miles} miles</p>
              </div>
              <div className={guides.metadataCell}>
                <p className={guides.cellName}>Vertical Gain</p>
                <p className={guides.cellData}>{data.mdx.frontmatter.gain_feet} feet</p>
              </div>
              <div className={guides.metadataCell}>
                <p className={guides.cellName}>Route Type</p>
                <p className={guides.cellData}>{data.mdx.frontmatter.route_type}</p>
              </div>
              <div className={guides.metadataCell}>
                <p className={guides.cellName}>Peak Climbing Season</p>
                <p className={guides.cellData}>{data.mdx.frontmatter.season}</p>
              </div>
            </div>
          </div>
        </div>
        <div className={guides.guideBody}>
          <p className={guides.lastUpdated}><span className={guides.lastUpdatedTitle}>Last Updated</span> {data.mdx.frontmatter.updated}</p>
          <MDXRenderer>
            {data.mdx.body}
          </MDXRenderer>
        </div>
        <div className={guides.guideFooter}>
          <h2>References</h2>
          <p>
            <a className={`${guides.guideFooterLink} ${guides.wikipedia}`} href={data.mdx.frontmatter.wikipedia} target="_blank" rel="noreferrer">{data.mdx.frontmatter.highpoint} on Wikipedia ↗</a>
            <a className={`${guides.guideFooterLink} ${guides.official}`} href={data.mdx.frontmatter.official_info} target="_blank" rel="noreferrer">Official Info for {data.mdx.frontmatter.highpoint} ↗</a>
            <a className={`${guides.guideFooterLink} ${guides.alltrails}`} href={data.mdx.frontmatter.alltrails} target="_blank" rel="noreferrer">AllTrails Route for {data.mdx.frontmatter.highpoint} ↗</a>
            <a className={`${guides.guideFooterLink} ${guides.weather}`} href={data.mdx.frontmatter.weather} target="_blank" rel="noreferrer">Weather for {data.mdx.frontmatter.highpoint} ↗</a>
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
        code
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
        alltrails
        description
        keywords
        updated(formatString: "D MMM YYYY")
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
