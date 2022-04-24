import * as React from 'react'
import Layout from '../components/layout'
import {
  masthead,
  mastheadTitle,
  mastheadSubtitle,
} from '../components/masthead.module.css'
import {
  startList
} from '../components/start.module.css'

const StartPage = () => {
  return (
    <Layout pageTitle="Getting Started">
    <div className={masthead}>
      <h1 className={mastheadTitle}>Getting Started</h1>
      <p className={mastheadSubtitle}>How to climb the fifty highest points.</p>
    </div>
    </Layout>
  )
}

export default StartPage
