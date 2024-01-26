import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Helmet from "react-helmet"
import { StaticImage } from 'gatsby-plugin-image'
import * as layout from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className={layout.container}>
      <Helmet>
        <title>{pageTitle} | {data.site.siteMetadata.title}</title>
        <meta name="description" content="This guide provides information on the tallest mountains in the United States, as well as the highest points in all 50 states. Whether you're looking for a challenging hike or simply want to enjoy some breathtaking views, this guide will help you summit the U.S. highpoints." />
        <meta name="keywords" content="highpoints, US state highpoints, highpointing guide, highpointing, highpointers"/>
        <meta name="author" content="Justin Andersun"/>
      </Helmet>
      <div className={layout.header}>
        <div className={layout.leftHeader}>
          <Link to="/" className={layout.titleLinkText}>
            <StaticImage className={layout.headerImg}
              alt="Highpoint Guide Logo"
              src="../images/logo.png"
            />
            <header className={layout.siteTitle}>{data.site.siteMetadata.title}</header>
          </Link>
        </div>
          <nav className={layout.rightHeader}>
            <ul className={layout.navLinks}>
              <li className={layout.navLinkItem}>
                <Link to="/start" className={layout.navLinkText}>
                  Get Started
                </Link>
              </li>
              <li className={layout.navLinkItem}>
                <Link to="/guides" className={layout.navLinkText}>
                  Guides
                </Link>
              </li>
              <li className={layout.navLinkItem}>
                <Link to="/rank" className={layout.navLinkText}>
                  Ranking
                </Link>
              </li>
              <li className={layout.navLinkItem}>
                <Link to="/gear" className={layout.navLinkText}>
                  Gear
                </Link>
              </li>
              <li className={layout.navLinkItem}>
                <Link to="/community" className={layout.navLinkText}>
                  Community
                </Link>
              </li>
            </ul>
          </nav>
      </div>
      <main>
        {children}
      </main>
      <footer className={layout.footer}>
        <p>Made with ❤ by fellow highpointers</p>
      </footer>
    </div>
  )
}

export default Layout
