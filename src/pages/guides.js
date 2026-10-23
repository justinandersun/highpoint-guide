import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Gridmap from '../components/gridmap'
import PageHeader from '../components/pageHeader'
import * as guidesIndex from '../components/guidesIndex.module.css'

const GuidesPage = () => {
  return (
    <Layout pageTitle="Guides">
      <PageHeader
        title="Guides"
        subtitle="Guidebooks for each state highpoint"
        description="A climbing guide for each U.S. state highpoint."
        keywords="highpoint climbing guide, US highpoint climbing guide, list of US highpoints"
        canonical="https://highpoint.guide/guides/"
      />
      <p className={guidesIndex.offlineNote}>
        Heading somewhere without service? <Link to="/start/#get-offline-ready">Save Highpoint Guide for offline use</Link>.
      </p>
      <Gridmap></Gridmap>
    </Layout>
  )
}

export default GuidesPage
