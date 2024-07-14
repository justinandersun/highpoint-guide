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

      <div className={home.homeHow}>
        <h2 className={home.homeHeading}>Highpoint Locations</h2>
        <p>Select a tile above for more granular location details on the specific highpoint.</p>
        <div className={home.googleMap}>
          <iframe title="U.S. Highpoint Map" src="https://www.google.com/maps/d/embed?mid=14j2M4rcOPXs4DHRBytD_jTFP4Nw&ehbc=2E312F" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>

    </Layout>
  )
}

export default IndexPage
