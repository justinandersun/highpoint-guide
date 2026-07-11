import * as React from 'react'
import { graphql, Link } from 'gatsby'
import Helmet from "react-helmet"
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import * as guides from '../components/guide.module.css'
import * as grid from '../components/gridmap.module.css'
import { parseFaqs } from '../utils/parseFaqs'
import { distanceInMiles } from '../utils/distance'

const NEARBY_RADIUS_MILES = 250

// The grid map keys Indiana's color class off "ii" (not its "in" code) since
// CSS Modules exports classes as JS identifiers, and "in" is a reserved word.
const gridColorClass = (code) => grid[code === 'in' ? 'ii' : code]

const GuidePost = ({ data }) => {
  const image = getImage(data.mdx.frontmatter.hp_image)
  const faqs = parseFaqs(data.mdx.rawBody)
  const nearbyGuides = data.allMdx.nodes
    .filter((node) => node.frontmatter.code !== data.mdx.frontmatter.code)
    .map((node) => ({
      ...node,
      distance: distanceInMiles(
        data.mdx.frontmatter.lat,
        data.mdx.frontmatter.long,
        node.frontmatter.lat,
        node.frontmatter.long
      ),
    }))
    .filter((node) => node.distance <= NEARBY_RADIUS_MILES)
    .sort((a, b) => a.distance - b.distance)
    .slice(0, 3)

  return (
    <Layout pageTitle={`${data.mdx.frontmatter.highpoint}, ${data.mdx.frontmatter.state}`}>
    <Helmet>
      <meta name="description" content={data.mdx.frontmatter.description} />
      <meta name="keywords" content={`${data.mdx.frontmatter.keywords}, ${data.mdx.frontmatter.highpoint} guide, highest point of ${data.mdx.frontmatter.state}, ${data.mdx.frontmatter.state} highpoint`} />
      <link rel="canonical" href={`https://highpoint.guide/${data.mdx.frontmatter.code}/`} />
      <meta property="og:title" content={`${data.mdx.frontmatter.highpoint}, ${data.mdx.frontmatter.state}`} />
      <meta property="og:description" content={data.mdx.frontmatter.description} />
      <meta property="og:url" content={`https://highpoint.guide/${data.mdx.frontmatter.code}/`} />
      <meta property="og:type" content="article" />
      {data.mdx.frontmatter.hp_image?.publicURL && (
        <meta property="og:image" content={`https://highpoint.guide${data.mdx.frontmatter.hp_image.publicURL}`} />
      )}
      <meta name="twitter:title" content={`${data.mdx.frontmatter.highpoint}, ${data.mdx.frontmatter.state}`} />
      <meta name="twitter:description" content={data.mdx.frontmatter.description} />
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://highpoint.guide/' },
            { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://highpoint.guide/guides/' },
            { '@type': 'ListItem', position: 3, name: data.mdx.frontmatter.state, item: `https://highpoint.guide/${data.mdx.frontmatter.code}/` },
          ],
        })}
      </script>
      {faqs.length > 0 && (
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((faq) => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
              },
            })),
          })}
        </script>
      )}
    </Helmet>
      <div className={guides.guideTitlehead}>
        <nav className={guides.breadcrumb} aria-label="Breadcrumb">
          <Link to="/">Home</Link> <span className={guides.breadcrumbSep}>&rarr;</span> <Link to="/guides/">Guides</Link> <span className={guides.breadcrumbSep}>&rarr;</span> <span>{data.mdx.frontmatter.state}</span>
        </nav>
        <h1 className={guides.guideTitle}>{data.mdx.frontmatter.highpoint}</h1>
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
        {nearbyGuides.length > 0 && (
          <div className={guides.guideFooter}>
            <h2>Nearby Highpoints</h2>
            <p>
              {nearbyGuides.map((node) => (
                <Link
                  key={node.frontmatter.code}
                  className={`${guides.guideFooterLink} ${gridColorClass(node.frontmatter.code)}`}
                  to={`/${node.frontmatter.code}/`}
                >
                  {node.frontmatter.highpoint}, {node.frontmatter.state} ↗
                </Link>
              ))}
            </p>
          </div>
        )}
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
        range
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
          publicURL
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      body
      rawBody
    }
    allMdx {
      nodes {
        frontmatter {
          code
          state
          highpoint
          lat
          long
        }
      }
    }
  }
`

export default GuidePost
