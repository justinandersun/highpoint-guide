import * as React from 'react'
import Helmet from "react-helmet"
import Layout from '../components/layout'
import Gridmap from '../components/gridmap'
import * as mast from '../components/masthead.module.css'

const GuidesPage = ({ data }) => {
  return (
    <Layout pageTitle="Guides">
      <Helmet>
        <meta name="description" content="A climbing guide for each U.S. state highpoint." />
        <meta name="keywords" content="highpoint climbing guide, US highpoint climbing guide, list of US highpoints"/>
        <link rel="canonical" href="https://highpoint.guide/guides/" />
      </Helmet>
      <div className={mast.masthead}>
        <h1 className={mast.mastheadTitle}>Guides</h1>
        <p className={mast.mastheadSubtitle}>Guidebooks for each state highpoint</p>
      </div>
      <Gridmap></Gridmap>
    </Layout>
  )
}

export default GuidesPage
