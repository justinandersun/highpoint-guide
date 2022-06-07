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
        <link rel="apple-touch-icon" sizes="180x180" href="../images/favicon/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="../images/favicon/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="../images/favicon/favicon-16x16.png"/>
        <link rel="manifest" href="../images/favicon/site.webmanifest"/>
        <link rel="mask-icon" href="../images/favicon/safari-pinned-tab.svg" color="#5bbad5"/>
        <meta name="msapplication-TileColor" content="#2b5797"/>
        <meta name="theme-color" content="#ffffff"/>
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
                Get Started
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link to="/guides" className={navLinkText}>
                Guides
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link to="/rank" className={navLinkText}>
                Rankings
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
