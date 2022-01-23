import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
      <p>An interactive map and guidebook for climbing the 50 U.S. Highpoints</p>
      <StaticImage
        alt="Highpoint Logo"
        src="../images/ushplogo.jpg"
      />
    </Layout>
  )
}

export default IndexPage
