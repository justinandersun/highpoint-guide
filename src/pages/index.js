import * as React from 'react'
import Layout from '../components/layout'
import {
  masthead,
  mastheadTitle,
  mastheadSubtitle,
} from '../components/masthead.module.css'
import {
  homeInfo,
  homeInfotitle,
  homeGetstarted,
} from '../components/home.module.css'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
      <div className={masthead}>
        <h1 className={mastheadTitle}>Climb the highest point in each state.</h1>
        <p className={mastheadSubtitle}>Your guide to summitting all fifty United States.</p>
      </div>
      <div className={homeInfo}>
        <p className={homeInfotitle}>What is highpointing?</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
      <div className={homeGetstarted}>
        <p className={homeInfotitle}>Getting Started</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </Layout>
  )
}

export default IndexPage
