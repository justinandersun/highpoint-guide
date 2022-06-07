import * as React from 'react'
import Helmet from "react-helmet"
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import {
  masthead,
  mastheadTitle,
  mastheadSubtitle,
} from '../components/masthead.module.css'
import * as comm from '../components/community.module.css'

const CommunityPage = () => {
  return (
    <Layout pageTitle="Community">
    <Helmet>
      <meta name="description" content="How to engage with the U.S. Highpointing Community." />
      <meta name="keywords" content="US highpoint Facebook, US highpoint Reddit, US highpoint Discord, US highpoint community"/>
    </Helmet>
    <div className={masthead}>
      <h1 className={mastheadTitle}>Community</h1>
      <p className={mastheadSubtitle}>Connect with fellow highpointers</p>
    </div>
    <div className={comm.communityBox}>
      <p>The Highpointing Community is a fun, welcoming, and helpful group of people from all walks of life. Don't hesistate to reach out!</p>
      <StaticImage className={comm.logo}
        alt="Highpoint Guide Logo"
        src="../images/logo.png"
      />
      <a className={`${comm.communityLink} ${comm.glacier}`} href="https://highpointers.org/" target="_blank" rel="noreferrer">Highpointers Club Website ↗</a>
      <p>The Highpointers Club is a non-profit organization dedicated to the conservation and maintenance of U.S. highpoints. They publish a periodic magazine with highpoint news and organize annual conventions at state highpoints.</p>

      <a className={`${comm.communityLink} ${comm.mountain}`} href="https://www.facebook.com/groups/276116215808514" target="_blank" rel="noreferrer">50 States Highpointing Group on Facebook ↗</a>
      <p>The Facebook Group is a great place to share stories and post photos of your highpointing adventures in a positive and encouraging environment.</p>

      <a className={`${comm.communityLink} ${comm.hill}`} href="https://www.reddit.com/r/Highpointers/" target="_blank" rel="noreferrer">r/Highpointers on Reddit ↗</a>
      <p>The sub-Reddit is a good forum for asking questions and getting up-to-date information about your climbs.</p>

      <a className={`${comm.communityLink} ${comm.field}`} href="https://github.com/justinandersun/highpoint-guide" target="_blank" rel="noreferrer">highpoint-guide on GitHub ↗</a>
      <p>Would you like to contribute to this project? Open a pull-request on GitHub.</p>
    </div>
    </Layout>
  )
}

export default CommunityPage
