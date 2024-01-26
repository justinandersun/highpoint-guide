import * as React from 'react'
import Layout from '../components/layout'
import Gridmap from '../components/gridmap'
import * as mast from '../components/masthead.module.css'
import * as home from '../components/home.module.css'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
      <div className={mast.masthead}>
        <h1 className={mast.mastheadTitle}>U.S. Highpoint Guide</h1>
        <p className={mast.mastheadSubtitle}>How to summit the U.S. state highpoints</p>
      </div>
      <div className={home.homeWhat}>
        <h2 className={home.homeHeading}>What is Highpointing?</h2>
        <p>"Highpointing" is the act of climbing to the highest geographic point in a region.</p>
        <p>Some highpoint on a global scale, like climbing the loftiest peak on every continent. Others highpoint locally, like bagging the tallest point in each county of their state.</p>
        <p>This guide is built for people climbing to the highest point of each U.S. state.</p>
      </div>
      <Gridmap></Gridmap>
    </Layout>
  )
}

export default IndexPage
