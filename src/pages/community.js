import * as React from 'react'
import Layout from '../components/layout'
import {
  masthead,
  mastheadTitle,
  mastheadSubtitle,
} from '../components/masthead.module.css'

const CommunityPage = () => {
  return (
    <Layout pageTitle="Community">
    <div className={masthead}>
      <h1 className={mastheadTitle}>Community</h1>
      <p className={mastheadSubtitle}>Connect with fellow highpointers</p>
    </div>
    <p>Highpointers Club, FB Group, Reddit. Push for Discord (feature that). Provide guidelines for making edits/contributing to this guide--it's a communal effort, etc. Link to prominent social media accounts--Twitter for this, mainly.</p>
    </Layout>
  )
}

export default CommunityPage
