import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import {
  masthead,
  mastheadTitle,
  mastheadSubtitle,
} from '../components/masthead.module.css'
import * as start from '../components/start.module.css'

const StartPage = () => {
  return (
    <Layout pageTitle="Get Started">
    <div className={masthead}>
      <h1 className={mastheadTitle}>Get Started</h1>
      <p className={mastheadSubtitle}>Ten steps to start your highpoint adventure</p>
    </div>
    <div className={start.startBody}>
      <div className={start.startSection}>
        <p>Highpointing is an exciting adventure. It’ll take you to all corners of the country, from breathtaking beauty to quirky outposts to backyard suburbia. Not only will you spend time in each state, but you’ll go off the beaten path—beyond popular cities and parks—to see this nation in a different light. It’s a long road to the top of America, but it’s a fascinating one. Here are ten steps to get started!</p>
      </div>

      <div className={start.startSection}>
        <h2>#1 Pick a Highpoint</h2>
        <p>Visit <Link className={start.startLink} to={`/guides`}>Guides</Link> to select a highpoint. The green and yellow states are most friendly to beginners. Read through the guide to learn how to get there, which route to take, and any red tape (permits, parking passes, etc.) you need to access the highpoint.</p>
      </div>

      <div className={start.startSection}>
        <h2>#2 Do Research</h2>
        <p>As much as I’d like this guide to be the renowned “source of truth” for highpoint information, I suggest you consult various sources before any highpointing trip. Each guide on this site includes several links to external resources you could leverage for up-to-date information: <a href="https://www.summitpost.org/u-s-state-highpoints/171191" target="_blank" rel="noreferrer">SummitPost</a>, <a href="https://www.peakbagger.com/list.aspx?lid=12003" target="_blank" rel="noreferrer">Peakbagger</a>, and even <a href="https://en.wikipedia.org/wiki/Highpointing#U.S._state_and_territory_highpoints" target="_blank" rel="noreferrer">Wikipedia</a>, to name a few. </p>
      </div>

      <div className={start.startSection}>
        <h2>#3 Consult the Community</h2>
        <p>If you have any questions or want more timely details about weather or trail conditions, consult the highpointing community. Highpointers are a helpful and welcoming bunch, so please be encouraged to reach out to them on the <a href="https://www.facebook.com/groups/276116215808514" target="_blank" rel="noreferrer">Facebook Group</a>, <a href="https://www.reddit.com/r/Highpointers/" target="_blank" rel="noreferrer">sub-Reddit</a>, or other communities mentioned on <Link className={start.startLink} to={`/community`}>Community</Link>.</p>
      </div>

      <div className={start.startSection}>
        <h2>#4 Inform Family & Friends</h2>
        <p>Share your itinerary with family and friends and set expectations for when they should hear from you. If you’re going on a longer hike (over 3 miles), share Search & Rescue (SAR) information. If they don’t hear from you, SAR should be their first contact if an emergency.</p>
        <p>Note: If YOU find yourself in an emergency, call 911.</p>
      </div>

      <div className={start.startSection}>
        <h2>#5 Download Maps</h2>
        <p>Once you know where you’re going, get “offline ready.” Many highpoints are in remote locations and do not have reliable phone service. To get ready for a dead zone:</p>
        <ul>
          <li>Download an <a href="https://www.tomsguide.com/how-to/how-to-download-offline-google-maps" target="_blank" rel="noreferrer">offline version of Google Maps</a>. before you go. Include not only the highpoint but some nearby towns in the snapshot. This map will help you navigate back to civilization after a hike. </li>
          <li>Download an offline version of the <a href="https://support.alltrails.com/hc/en-us/articles/360018931632-How-do-I-use-my-downloaded-maps-for-navigation-" target="_blank" rel="noreferrer">AllTrails route</a>. While most highpoints have well-marked trails, having a GPS-ready map to ensure you’re on the right path is excellent for your peace of mind.</li>
          <li>Bring a portable phone charger (and make sure it’s charged before you go).</li>
        </ul>
      </div>

      <div className={start.startSection}>
        <h2>#6 Drive Safe</h2>
        <p>Many highpoints require long drives (3+ hour car rides) to reach the trailhead. Be well-rested before any of these drives, use proper navigation, and don’t drive distracted. Practice these (surprisingly helpful) <a href="https://www.fmcsa.dot.gov/ourroads/tips-driving-safely-around-large-trucks-or-buses" target="_blank" rel="noreferrer">safe-driving tips</a> from the Department of Transportation.</p>
        <p>Also, make sure your car is sufficient for the terrain. Some highpoints require long (30+ mile drives) on rough, unpaved roads, and others traverse steep inclines/declines and icy conditions.</p>
      </div>

      <div className={start.startSection}>
        <h2>#7 Pack the Ten Essentials</h2>
        <p>The famous <a href="https://www.nps.gov/articles/10essentials.htm" target="_blank" rel="noreferrer">Ten Essentials</a> are helpful for any outdoor excursion, but they’re crucial for highpointing. At a high level, make sure you have:</p>
        <ol>
          <li>Navigation</li>
          <li>Sun Protection</li>
          <li>Insulation</li>
          <li>Illumination</li>
          <li>First-Aid</li>
          <li>Fire</li>
          <li>Repair Tools</li>
          <li>Nutrition</li>
          <li>Hydration</li>
          <li>Emergency Shelter</li>
        </ol>
      </div>

      <div className={start.startSection}>
        <h2>#8 Leave No Trace</h2>
        <p>Leave every highpoint better than you found it. Some highpoints are in delicate ecosystems, and others are on private property. To ensure highpoints stay beautiful and accessible to others, practice the seven principles of <a href="https://lnt.org/why/7-principles/" target="_blank" rel="noreferrer">Leave No Trace</a>:</p>
        <ol>
          <li>Plan Ahead & Prepare</li>
          <li>Travel & Camp on Durable Surfaces</li>
          <li>Dispose of Waste Properly</li>
          <li>Leave What You Find</li>
          <li>Minimize Campfire Impact</li>
          <li>Respect Wildlife</li>
          <li>Be Considerate of Others</li>
        </ol>
      </div>

      <div className={start.startSection}>
        <h2>#9 Know Your Limits</h2>
        <p>While some highpoints are actual “walks in the park,” others can be highly challenging and dangerous. If you discover you’re in over your head, turn around and try it again another day. If you don’t have technical climbing experience with ice axes, crampons, and ropes, get trained before attempting routes that require these skills. Know and respect your limits.</p>
      </div>

      <div className={`${start.startSection} ${start.lastSection}`}>
        <h2>#10 Don’t Plan for a Rescue</h2>
        <p>If highpointing had one rule, it would be: “Getting to the top is optional but getting down is mandatory.” No highpoint is worth dying for.</p>
      </div>

      <StaticImage className={start.logo}
        alt="Highpoint Guide Logo"
        src="../images/logo.png"
      />
    </div>
    </Layout>
  )
}

export default StartPage
