import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Helmet from "react-helmet"
import { StaticImage } from 'gatsby-plugin-image'
import {
  container,
  header,
  siteTitle,
  leftHeader,
  rightHeader,
  headerImg,
  navLinks,
  navLinkItem,
  navLinkText,
  footer,
  footerLink,
} from './layout.module.css'

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
    <div className={container}>
      <Helmet>
        <title>{pageTitle} | {data.site.siteMetadata.title}</title>
        <meta name="description" content="An interactive guidebook for climbing all fifty U.S. state highpoints." />
        <meta name="keywords" content="highpoints, US state highpoints, highpointing guide, highpointing, highpointers"/>
        <meta name="author" content="Justin Andersun"/>
      </Helmet>
      <div className={header}>
        <div className={leftHeader}>
          <Link to="/" className={navLinkText}>
            <StaticImage className={headerImg}
              alt="Highpoint Guide Logo"
              src="../images/logo.png"
            />
            <header className={siteTitle}>{data.site.siteMetadata.title}</header>
          </Link>
        </div>
        <nav className={rightHeader}>
          <ul className={navLinks}>
            <li className={navLinkItem}>
              <Link to="/start" className={navLinkText}>
                Start
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link to="/guides" className={navLinkText}>
                Guides
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link to="/rank" className={navLinkText}>
                Ranking
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link to="/community" className={navLinkText}>
                Community
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <main>
        {children}
      </main>
      <footer className={footer}>
        <p>Made and maintained by <a className={footerLink} href="https://andersun.com" target="_blank" rel="noreferrer">Justin Andersun</a>.</p>
      </footer>
    </div>
  )
}

export default Layout
