import * as React from 'react'
import Layout from '../components/layout'
import Gridmap from '../components/gridmap'
import PageHeader from '../components/pageHeader'

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
      <Gridmap></Gridmap>
    </Layout>
  )
}

export default GuidesPage
