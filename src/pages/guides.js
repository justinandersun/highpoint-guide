import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import {
  masthead,
  mastheadTitle,
  mastheadSubtitle,
} from '../components/masthead.module.css'

const GuidesPage = ({ data }) => {
  return (
    <Layout pageTitle="Guides">
      <div className={masthead}>
        <h1 className={mastheadTitle}>Guides</h1>
        <p className={mastheadSubtitle}>Guidebooks for each state highpoint</p>
      </div>
    </Layout>
  )
}

export default GuidesPage
