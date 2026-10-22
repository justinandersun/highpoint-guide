import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import PageHeader from '../components/pageHeader'
import * as comm from '../components/community.module.css'

const CommunityPage = () => {
  return (
    <Layout pageTitle="Community">
    <PageHeader
      title="Community"
      subtitle="Connect with fellow highpointers"
      description="How to engage with the U.S. Highpointing Community."
      keywords="US highpoint Facebook, US highpoint Reddit, US highpoint Discord, US highpoint community"
      canonical="https://highpoint.guide/community/"
    />
    <div className={comm.communityBox}>
      <p>The Highpointing Community is a fun, welcoming, and helpful group of people from all walks of life. Don't hesitate to <Link to="/contact/">reach out</Link>!</p>

      <a className={`${comm.communityLink} ${comm.discord}`} href="https://discord.gg/pFbbSfUBrr" target="_blank" rel="noreferrer">U.S. Highpointers on Discord ↗</a>
      <p>In June 2022, we launched the U.S. Highpointers Discord Server to engage with the highpointing community. Anyone is welcome to join to ask questions about specific highpoints, share progress, and meet fellow highpointers!</p>

      <a className={`${comm.communityLink} ${comm.highpointers}`} href="https://highpointers.org/" target="_blank" rel="noreferrer">Highpointers Club Website ↗</a>
      <p>The Highpointers Club is a non-profit organization dedicated to the conservation and maintenance of U.S. highpoints. They publish a periodic magazine with highpoint news and organize annual conventions at state highpoints.</p>

      <a className={`${comm.communityLink} ${comm.facebook}`} href="https://www.facebook.com/groups/276116215808514" target="_blank" rel="noreferrer">50 States Highpointing Group on Facebook ↗</a>
      <p>The Facebook Group is a great place to share stories and post photos of your highpointing adventures in a positive and encouraging environment.</p>

      <a className={`${comm.communityLink} ${comm.reddit}`} href="https://www.reddit.com/r/Highpointers/" target="_blank" rel="noreferrer">r/Highpointers on Reddit ↗</a>
      <p>The sub-Reddit is a good forum for asking questions and getting up-to-date information about your climbs.</p>

      <a className={`${comm.communityLink} ${comm.podcast}`} href="https://linktr.ee/highpointingpodcast" target="_blank" rel="noreferrer">Trail Talk: Highpointing Podcast ↗</a>
      <p>Listen to Lauren Toner conduct in-depth interviews with members of the Highpointing Community.</p>

      <a className={`${comm.communityLink} ${comm.video}`} href="https://www.youtube.com/c/RooftopsofAmerica" target="_blank" rel="noreferrer">Rooftops of America Videos ↗</a>
      <p>Watch films about the rich geographic and cultural history of the American Highpoints by Skye Marthaler.</p>

    </div>
    </Layout>
  )
}

export default CommunityPage
