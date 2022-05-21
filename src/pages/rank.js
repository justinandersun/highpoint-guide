import * as React from 'react'
import Layout from '../components/layout'
import {
  masthead,
  mastheadTitle,
  mastheadSubtitle,
} from '../components/masthead.module.css'

const RankPage = () => {
  return (
    <Layout pageTitle="Rankings">
    <div className={masthead}>
      <h1 className={mastheadTitle}>Rankings</h1>
      <p className={mastheadSubtitle}>Highpoints by height, length, and difficulty</p>
    </div>
    </Layout>
  )
}

export default RankPage
