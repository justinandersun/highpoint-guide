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
          <p>TBD</p>
        </div>

        <h2 className={about.photoHeading}>Fifty Summits</h2>
        <p className={about.photoSubheading}>TBD</p>
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
