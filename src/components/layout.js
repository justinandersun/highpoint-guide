import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
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
      <title>{pageTitle} | {data.site.siteMetadata.title}</title>
      <div className={header}>
        <div className={leftHeader}>
          <StaticImage className={headerImg}
            alt="Highpoint Guide Logo"
            src="../images/logo.png"
          />
          <header className={siteTitle}>{data.site.siteMetadata.title}</header>
        </div>
        <nav className={rightHeader}>
          <ul className={navLinks}>
            <li className={navLinkItem}>
              <Link to="/" className={navLinkText}>
                Map
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link to="/guides" className={navLinkText}>
                Guides
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link to="/about" className={navLinkText}>
                About
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link to="/start" className={navLinkText}>
                Getting Started
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <main>
        {children}
      </main>
      <footer className={footer}>
        <p>Made and maintained with ❤️ by <a className={footerLink} href="https://andersun.com" target="_blank" rel="noreferrer">Justin Andersun</a>.</p>
      </footer>
    </div>
  )
}

export default Layout
