import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import {
  masthead,
  mastheadTitle,
  mastheadSubtitle,
} from '../components/masthead.module.css'
import * as homes from '../components/home.module.css'
import * as grid from '../components/gridmap.module.css'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
      <div className={masthead}>
        <h1 className={mastheadTitle}>U.S. Highpoint Guide</h1>
        <p className={mastheadSubtitle}>How to summit the highest point in each state</p>
      </div>
      <div className={homes.homeWhat}>
        <h2 className={homes.homeHeading}>What is Highpointing?</h2>
        <p>"Highpointing" is the act of climbing to the highest geographic point in a region.</p>
        <p>Some adventurers highpoint on a global scale, such as climbing the loftiest peak on every continent.</p>
        <p>Other folks highpoint on a local scale, like bagging the tallest point of each county in their state.</p>
        <p>This guide is built for people interested in climbing to the highest point of U.S. states.</p>
      </div>
      <div className={homes.homeHow}>
        <h2 className={homes.homeHeading}>Using this Guide</h2>
        <p>Our mission is to help climbers achieve their goal of summitting U.S. highpoints. We share the best routes, gear, logistics, and recommendations to make each highpoint a successful adventure.</p>
        <p>Each state on the map below is colored for its highpoint's geography:</p>
        <div className={homes.howBox}>
          <div className={homes.flat}>Flat</div>
          <div className={homes.hill}>Hill</div>
          <div className={homes.mountain}>Mountain</div>
          <div className={homes.glacier}>Glaciated</div>
        </div>
        <p>Select a state to access its highpoint guide.</p>
      </div>
      <div className={grid.gridContainer}>
        <div className={`${grid.state} ${grid.ak}`}><Link className={grid.stateLink} to={`/ak`}>AK</Link></div>
        <div className={`${grid.state} ${grid.me}`}><Link className={grid.stateLink} to={`/me`}>ME</Link></div>
        <div className={`${grid.state} ${grid.vt}`}><Link className={grid.stateLink} to={`/vt`}>VT</Link></div>
        <div className={`${grid.state} ${grid.nh}`}><Link className={grid.stateLink} to={`/nh`}>NH</Link></div>
        <div className={`${grid.state} ${grid.wa}`}><Link className={grid.stateLink} to={`/wa`}>WA</Link></div>
        <div className={`${grid.state} ${grid.id}`}><Link className={grid.stateLink} to={`/id`}>ID</Link></div>
        <div className={`${grid.state} ${grid.mt}`}><Link className={grid.stateLink} to={`/mt`}>MT</Link></div>
        <div className={`${grid.state} ${grid.nd}`}><Link className={grid.stateLink} to={`/nd`}>ND</Link></div>
        <div className={`${grid.state} ${grid.mn}`}><Link className={grid.stateLink} to={`/mn`}>MN</Link></div>
        <div className={`${grid.state} ${grid.wi}`}><Link className={grid.stateLink} to={`/wi`}>WI</Link></div>
        <div className={`${grid.state} ${grid.mi}`}><Link className={grid.stateLink} to={`/mi`}>MI</Link></div>
        <div className={`${grid.state} ${grid.ny}`}><Link className={grid.stateLink} to={`/ny`}>NY</Link></div>
        <div className={`${grid.state} ${grid.ma}`}><Link className={grid.stateLink} to={`/ma`}>MA</Link></div>
        <div className={`${grid.state} ${grid.ct}`}><Link className={grid.stateLink} to={`/ct`}>CT</Link></div>
        <div className={`${grid.state} ${grid.ri}`}><Link className={grid.stateLink} to={`/ri`}>RI</Link></div>
        <div className={`${grid.state} ${grid.or}`}><Link className={grid.stateLink} to={`/or`}>OR</Link></div>
        <div className={`${grid.state} ${grid.nv}`}><Link className={grid.stateLink} to={`/nv`}>NV</Link></div>
        <div className={`${grid.state} ${grid.wy}`}><Link className={grid.stateLink} to={`/wy`}>WY</Link></div>
        <div className={`${grid.state} ${grid.sd}`}><Link className={grid.stateLink} to={`/sd`}>SD</Link></div>
        <div className={`${grid.state} ${grid.ia}`}><Link className={grid.stateLink} to={`/ia`}>IA</Link></div>
        <div className={`${grid.state} ${grid.il}`}><Link className={grid.stateLink} to={`/il`}>IL</Link></div>
        <div className={`${grid.state} ${grid.ii}`}><Link className={grid.stateLink} to={`/in`}>IN</Link></div>
        <div className={`${grid.state} ${grid.oh}`}><Link className={grid.stateLink} to={`/oh`}>OH</Link></div>
        <div className={`${grid.state} ${grid.pa}`}><Link className={grid.stateLink} to={`/pa`}>PA</Link></div>
        <div className={`${grid.state} ${grid.nj}`}><Link className={grid.stateLink} to={`/nj`}>NJ</Link></div>
        <div className={`${grid.state} ${grid.ca}`}><Link className={grid.stateLink} to={`/ca`}>CA</Link></div>
        <div className={`${grid.state} ${grid.ut}`}><Link className={grid.stateLink} to={`/ut`}>UT</Link></div>
        <div className={`${grid.state} ${grid.co}`}><Link className={grid.stateLink} to={`/co`}>CO</Link></div>
        <div className={`${grid.state} ${grid.ne}`}><Link className={grid.stateLink} to={`/ne`}>NE</Link></div>
        <div className={`${grid.state} ${grid.mo}`}><Link className={grid.stateLink} to={`/mo`}>MO</Link></div>
        <div className={`${grid.state} ${grid.ky}`}><Link className={grid.stateLink} to={`/ky`}>KY</Link></div>
        <div className={`${grid.state} ${grid.wv}`}><Link className={grid.stateLink} to={`/wv`}>WV</Link></div>
        <div className={`${grid.state} ${grid.va}`}><Link className={grid.stateLink} to={`/va`}>VA</Link></div>
        <div className={`${grid.state} ${grid.md}`}><Link className={grid.stateLink} to={`/md`}>MD</Link></div>
        <div className={`${grid.state} ${grid.de}`}><Link className={grid.stateLink} to={`/de`}>DE</Link></div>
        <div className={`${grid.state} ${grid.az}`}><Link className={grid.stateLink} to={`/az`}>AZ</Link></div>
        <div className={`${grid.state} ${grid.nm}`}><Link className={grid.stateLink} to={`/nm`}>NM</Link></div>
        <div className={`${grid.state} ${grid.ks}`}><Link className={grid.stateLink} to={`/ks`}>KS</Link></div>
        <div className={`${grid.state} ${grid.ar}`}><Link className={grid.stateLink} to={`/ar`}>AR</Link></div>
        <div className={`${grid.state} ${grid.tn}`}><Link className={grid.stateLink} to={`/tn`}>TN</Link></div>
        <div className={`${grid.state} ${grid.nc}`}><Link className={grid.stateLink} to={`/nc`}>NC</Link></div>
        <div className={`${grid.state} ${grid.sc}`}><Link className={grid.stateLink} to={`/sc`}>SC</Link></div>
        <div className={`${grid.state} ${grid.ok}`}><Link className={grid.stateLink} to={`/ok`}>OK</Link></div>
        <div className={`${grid.state} ${grid.la}`}><Link className={grid.stateLink} to={`/la`}>LA</Link></div>
        <div className={`${grid.state} ${grid.ms}`}><Link className={grid.stateLink} to={`/ms`}>MS</Link></div>
        <div className={`${grid.state} ${grid.al}`}><Link className={grid.stateLink} to={`/al`}>AL</Link></div>
        <div className={`${grid.state} ${grid.ga}`}><Link className={grid.stateLink} to={`/ga`}>GA</Link></div>
        <div className={`${grid.state} ${grid.hi}`}><Link className={grid.stateLink} to={`/hi`}>HI</Link></div>
        <div className={`${grid.state} ${grid.tx}`}><Link className={grid.stateLink} to={`/tx`}>TX</Link></div>
        <div className={`${grid.state} ${grid.fl}`}><Link className={grid.stateLink} to={`/fl`}>FL</Link></div>
      </div>
      <div className={homes.homeHow}>
        <p>Tile maps make each state the same size to reduce some bias associated with traditional maps, like the <a href="https://www.tableau.com/about/blog/2017/1/viz-whiz-hex-tile-maps-64713" target="_blank">Alaska effect</a>. Although Alaska contains the largest highpoint (by over 6,000 feet!), it needn't dwarf other states 😊</p>
      </div>
    </Layout>
  )
}

export default IndexPage
