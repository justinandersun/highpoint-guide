import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import PageHeader from '../components/pageHeader'
import * as privacy from '../components/privacy.module.css'

const PrivacyPage = () => {
  return (
    <Layout pageTitle="Privacy">
      <PageHeader
        title="Privacy"
        subtitle="What we collect and how to use this site"
        description="Highpoint Guide's privacy practices and a disclaimer for using this site."
        canonical="https://highpoint.guide/privacy/"
      />
      <div className={privacy.body}>
        <p className={privacy.lastUpdated}><span className={privacy.lastUpdatedTitle}>Last Updated</span> 23 Oct 2026</p>
        <h2>Privacy</h2>
        <p>
          This site uses Google Analytics to understand how many people visit and which pages are useful.
          Google Analytics collects standard usage data--pages visited, approximate location (derived from
          your IP address), device and browser type, and how you arrived at the site--typically through
          cookies or similar technology.
        </p>
        <p>
          We don&apos;t collect your name, email, or other personal information directly. There are no
          accounts or log-ins on this site.
        </p>
        <p>
          You can opt out of Google Analytics tracking using{' '}
          <a target="_blank" rel="noreferrer" href="https://tools.google.com/dlpage/gaoptout">
            Google&apos;s browser opt-out add-on
          </a>{' '}
          or by blocking cookies/enabling tracking protection in your browser.
        </p>
        <p>
          Links to external sites (AllTrails, SummitPost, Peakbagger, official park and forest pages, and
          others) will take you off this site. Those sites have their own privacy practices, which we don&apos;t
          control.
        </p>

        <h2>Disclaimer</h2>
        <p>
          This guide is provided for informational purposes only.
        </p>
        <p>
          Trail conditions, access rules, permit requirements, fees, and contact information change over
          time. Despite our best efforts to keep this guide accurate, some information here may be outdated
          or incorrect. Always verify current conditions and regulations with the official managing agency
          before you go.
        </p>
        <p>
          Highpointing and backcountry travel carry inherent risks, including remote locations, elevation,
          weather, technical terrain, and in some cases travel across private property. You are responsible
          for your own safety and decisions. This site and its author aren&apos;t liable for injury, loss, or
          damages related to using this information.
        </p>
        <p>
          External links are provided for reference. We don&apos;t control or vouch for the accuracy of
          third-party sites.
        </p>
        <p>
          We audit the guides&apos; external links a few times a year to make sure they&apos;re still active,
          still relevant, and haven&apos;t been hijacked to point somewhere else. If you find a link that
          looks wrong, please <Link to="/contact/">let us know</Link>.
        </p>
      </div>
    </Layout>
  )
}

export default PrivacyPage
