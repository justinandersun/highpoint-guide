import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import PageHeader from '../components/pageHeader'
import ProtectedEmail from '../components/protectedEmail'
import * as privacy from '../components/privacy.module.css'

const ContactPage = () => {
  return (
    <Layout pageTitle="Contact">
      <PageHeader
        title="Contact"
        subtitle="Share your ideas, bugs, and questions!"
        description="How to report a bug, suggest a correction, or share an idea for U.S. Highpoint Guide."
        canonical="https://highpoint.guide/contact/"
      />
      <div className={privacy.body}>
        <p>
          Highpoint Guide gets better every time a reader points out something I missed. If you spot a problem or have an idea, I’d love to hear from you.
        </p>

        <h2>How to Contribute</h2>
        <ul>
          <li>
            <strong>Report a Bug.</strong> A broken link, a page that doesn’t load right, or something that
            looks off on your phone.
          </li>
          <li>
            <strong>Request Corrections.</strong> Trail conditions, road access, permits, and closures change.
            If something in a guide is out of date, let me know which page and what you found.
          </li>
          <li>
            <strong>Share an Idea.</strong> New routes, gear that worked for you, or something you wish the
            site did. Recent trip reports and photos are especially helpful.
          </li>
        </ul>

        <h2>Get in Touch</h2>
        <p>
          Email me at <ProtectedEmail />. I read everything, and usually respond within 1–2 days (unless it gets marked as spam).
        </p>
        <p>
          For general highpointing questions, the <Link to="/community/">Community</Link> page lists other forums and resources.
        </p>
      </div>
    </Layout>
  )
}

export default ContactPage
