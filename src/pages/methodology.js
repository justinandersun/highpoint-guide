import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import PageHeader from '../components/pageHeader'
// Same long-form text layout as the Privacy page.
import * as page from '../components/privacy.module.css'

const MethodologyPage = () => {
  return (
    <Layout pageTitle="Methodology">
      <PageHeader
        title="Methodology"
        subtitle="How we measure heights, distances, and difficulty"
        description="How the U.S. Highpoint Guide sources elevations, trail distances, elevation gain, rankings, and difficulty ratings for all fifty state highpoints."
        canonical="https://highpoint.guide/methodology/"
      />
      <div className={page.body}>
        <p className={page.lastUpdated}><span className={page.lastUpdatedTitle}>Last Updated</span> 23 Oct 2026</p>
        <p>
          Sources often disagree about a highpoint&apos;s height or a trail&apos;s length. These are the rules
          this guide follows so the numbers are consistent from state to state.
        </p>

        <h2>Elevation</h2>
        <p>
          Elevations use the current figure listed on Wikipedia, which generally cites U.S. Geological Survey or
          National Geodetic Survey data on the modern NAVD88 vertical datum. A park, forest, or summit marker may
          list a slightly different number, usually an older survey or a different datum. Those differences are
          typically just a few feet.
        </p>
        <p>
          In rare cases where a summit has physically changed, such as being regraded for an observation tower,
          the guide uses the most authoritative figure measured after the change.
        </p>

        <h2>Rank</h2>
        <p>
          Ranks compare the elevations of the fifty state highpoints only, from Denali (1st) to Britton Hill (50th). Washington,
          D.C., and U.S. territories aren&apos;t included.
        </p>

        <h2>Distance</h2>
        <p>
          Distances are round trip for the route described under each guide&apos;s Recommended Route. When the
          managing agency (the National Park Service, U.S. Forest Service, or a state or county park) publishes a
          distance for that route, the guide uses it. Otherwise, it uses the AllTrails route shown on the guide.
          Each guide&apos;s text notes when a figure is one way.
        </p>
        <p>
          For drive-up highpoints, the distance is the short walk from the parking area to the highpoint.
        </p>

        <h2>Gain</h2>
        <p>
          Gain is the total climbing elevation on the route, counting every uphill section, from the same source
          as the distance. Because most trails go up and down along the way, total gain can be more than the
          difference between the trailhead and summit elevations. When an agency lists only the trailhead and
          summit elevations, the guide uses the AllTrails total gain.
        </p>

        <h2>Difficulty and Effort</h2>
        <p>
            <strong>Difficulty</strong> uses the{' '}
            <a target="_blank" rel="noreferrer" href="https://www.summitpost.org/martin-classification-of-difficulty-for-u-s-state-highpoints/1007040">
              Martin Classification
            </a>
            , a 0 to 10 scale of how technically demanding each highpoint is.
        </p>
        <p>
            <strong>Effort</strong> uses the{' '}
            <a target="_blank" rel="noreferrer" href="https://www.summitpost.org/the-effort-scale-of-highpointing-the-fifty-us-states/1046476">
              VanderHeide Effort Scale
            </a>
            , a 0 to 1000 scale of the physical effort needed to summit.
          </p>
        <p>Both are subjective ratings published by members of the highpointing community.</p>

        <h2>Range</h2>
        <p>
          Each highpoint lists the specific mountain range it belongs to, such as the Wind River Range or the
          Taconic Mountains. Many lower highpoints aren&apos;t part of a named range, so those list the
          recognized landform or region they sit in instead, such as the High Plains or the Driftless Area.
        </p>

        <h2>Fees, Permits, and Links</h2>
        <p>
          Fees, permits, hours, and closures are checked against the managing agency&apos;s own website when a
          guide is reviewed, and each guide&apos;s Last Updated date shows when that happened. These details
          change often, so always confirm them with the agency before you go. See the{' '}
          <Link to="/privacy/">disclaimer</Link> for more.
        </p>

        <h2>Corrections</h2>
        <p>
          Spot something out of date? Please <Link to="/contact/">get in touch</Link>.
        </p>
      </div>
    </Layout>
  )
}

export default MethodologyPage
