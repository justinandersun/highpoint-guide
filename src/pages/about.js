import * as React from 'react'
import Layout from '../components/layout'
import PageHeader from '../components/pageHeader'
import * as about from '../components/about.module.css'

const STATES = [
  ['ak', 'Alaska'], ['al', 'Alabama'], ['ar', 'Arkansas'], ['az', 'Arizona'], ['ca', 'California'],
  ['co', 'Colorado'], ['ct', 'Connecticut'], ['de', 'Delaware'], ['fl', 'Florida'], ['ga', 'Georgia'],
  ['hi', 'Hawaii'], ['ia', 'Iowa'], ['id', 'Idaho'], ['il', 'Illinois'], ['in', 'Indiana'],
  ['ks', 'Kansas'], ['ky', 'Kentucky'], ['la', 'Louisiana'], ['ma', 'Massachusetts'], ['md', 'Maryland'],
  ['me', 'Maine'], ['mi', 'Michigan'], ['mn', 'Minnesota'], ['mo', 'Missouri'], ['ms', 'Mississippi'],
  ['mt', 'Montana'], ['nc', 'North Carolina'], ['nd', 'North Dakota'], ['ne', 'Nebraska'], ['nh', 'New Hampshire'],
  ['nj', 'New Jersey'], ['nm', 'New Mexico'], ['nv', 'Nevada'], ['ny', 'New York'], ['oh', 'Ohio'],
  ['ok', 'Oklahoma'], ['or', 'Oregon'], ['pa', 'Pennsylvania'], ['ri', 'Rhode Island'], ['sc', 'South Carolina'],
  ['sd', 'South Dakota'], ['tn', 'Tennessee'], ['tx', 'Texas'], ['ut', 'Utah'], ['va', 'Virginia'],
  ['vt', 'Vermont'], ['wa', 'Washington'], ['wi', 'Wisconsin'], ['wv', 'West Virginia'], ['wy', 'Wyoming'],
]

const AboutPage = () => {
  return (
    <Layout pageTitle="About">
      <PageHeader
        title="About"
        subtitle="The person behind this guide"
        description="Meet the person behind U.S. Highpoint Guide and see photos from all fifty state highpoints."
        keywords="who made Highpoint Guide, US highpointer, 50 state highpoints photos"
        canonical="https://highpoint.guide/about/"
      />
      <div className={about.aboutBody}>
        <div className={about.bio}>
          <p>I’m Justin, and I grew up in Michigan, about as flat as it gets. But mountains always fascinated me, and in 2013 a friend and I road-tripped through New England in winter to summit Mount Greylock with duct tape around our shoes to keep the snow out. I was hooked. Highpointing went on to shape my twenties and early thirties, pulling me to live in eight states from South Carolina to Washington.</p>

          <p>I’ve climbed Gannett Peak deep in Wyoming’s Wind River Range, scrambled Montana’s Granite Peak unroped via the Southwest Couloir, and needed two attempts on Oregon’s Mount Hood after a May snowstorm turned me around the first time. I’ve loved the low-elevation places too, like the proud highpoint in a northern Iowa cornfield. Today I’ve stood on 49 of the 50. Only Denali remains, which I’m procrastinating with my first child on the way.</p>

          <p>I built Highpoint Guide in 2022 to share what I learned. Every guide on this site comes from my own time on the trails, covering the routes, logistics, and gear that I found helpful. If a flatlander like me can climb Rainier, Gannett, and Granite, so can you. Highpointing is one of the best ways to explore the less traveled corners of America and its remarkably diverse terrain. Below are photos from my own highpointing journey.</p>

          <p>Happy climbing!</p>
        </div>

        <h2 className={about.photoHeading}>My Highpoints</h2>
        <p className={about.photoSubheading}>49 of 50 summitted, 2013-2025</p>
        <div className={about.photoGrid}>
          {STATES.map(([code, name]) => (
            <div className={about.photoTile} key={code}>
              <span className={about.photoTileLabel}>
                <span className={about.photoTileState}>{code.toUpperCase()}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage
