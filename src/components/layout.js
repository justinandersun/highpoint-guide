import * as React from 'react'
import { useState } from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Helmet from "react-helmet"
import { StaticImage } from 'gatsby-plugin-image'
import * as layout from './layout.module.css'

const NAV_LINKS = [
  { to: '/start/', label: 'Get Started' },
  { to: '/guides/', label: 'Guides' },
  { to: '/rank/', label: 'Ranking' },
  { to: '/gear/', label: 'Gear' },
  { to: '/community/', label: 'Community' },
  { to: '/about/', label: 'About' },
]

const Layout = ({ pageTitle, children }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          siteUrl
          image
          twitterUsername
        }
      }
    }
  `)

  const { siteMetadata } = data.site

  return (
    <div className={layout.container}>
      <Helmet>
        <title>{pageTitle} | {siteMetadata.title}</title>
        <meta name="description" content="This guide provides information on the tallest mountains in the United States, as well as the highest points in all 50 states. Whether you're looking for a challenging hike or simply want to enjoy some breathtaking views, this guide will help you summit the U.S. highpoints." />
        <meta name="keywords" content="highpoints, US state highpoints, highpointing guide, highpointing, highpointers"/>
        <meta name="author" content="Justin Andersun"/>
        <meta property="og:site_name" content={siteMetadata.title} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${siteMetadata.siteUrl}${siteMetadata.image}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={siteMetadata.twitterUsername} />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: siteMetadata.title,
            description: siteMetadata.description,
            url: siteMetadata.siteUrl,
          })}
        </script>
      </Helmet>
      <div className={layout.header}>
        <div className={layout.leftHeader}>
          <Link to="/" className={layout.titleLinkText} onClick={() => setMenuOpen(false)}>
            <StaticImage className={layout.headerImg}
              alt="Highpoint Guide Logo"
              src="../images/logo.png"
            />
            <header className={layout.siteTitle}>{siteMetadata.title}</header>
          </Link>
        </div>
        <button
          type="button"
          className={layout.menuToggle}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={layout.menuToggleBar}></span>
          <span className={layout.menuToggleBar}></span>
          <span className={layout.menuToggleBar}></span>
        </button>
        <nav className={`${layout.rightHeader} ${menuOpen ? layout.navOpen : ''}`}>
          <ul className={layout.navLinks}>
            {NAV_LINKS.map(({ to, label }) => (
              <li className={layout.navLinkItem} key={to}>
                <Link
                  to={to}
                  className={layout.navLinkText}
                  activeClassName={layout.navLinkActive}
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <main>
        {children}
      </main>
      <footer className={layout.footer}>
        <p>&copy; 2026 <a target="_blank" rel="noreferrer" href="https://andersun.com/">Justin Anderson</a>. <Link to="/contact/">Contact</Link> · <Link to="/privacy/">Privacy &amp; Disclaimer</Link></p>
      </footer>
    </div>
  )
}

export default Layout
