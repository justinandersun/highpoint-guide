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
    <Layout pageTitle="Get Started">
    <div className={masthead}>
      <h1 className={mastheadTitle}>Get Started</h1>
      <p className={mastheadSubtitle}>How to begin your highpoint adventures</p>
    </div>
    </Layout>
  )
}

export default StartPage
