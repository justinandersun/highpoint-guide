import * as React from 'react'
import { Link } from 'gatsby'
import * as homes from './home.module.css'
import * as grid from './gridmap.module.css'

function Gridmap() {
  return (
    <div>
    <div className={homes.homeHow}>
      <h2 className={homes.homeHeading}>Using this Guide</h2>
      <p>Our mission is to help climbers achieve their goal of summitting U.S. highpoints. We share the best routes, gear, logistics, and recommendations to make each highpoint a successful adventure.</p>
      <p>Each state is colored for its highpoint geography:</p>
      <div className={homes.howBox}>
        <div className={homes.flat}>Flat</div>
        <div className={homes.hill}>Hill</div>
        <div className={homes.mountain}>Mountain</div>
        <div className={homes.glacier}>Glaciated</div>
      </div>
      <p>Select a state to access its highpoint guide.</p>
    </div>
    <div className={grid.gridContainer}>
      <Link className={`${grid.stateLink} ${grid.ak}`} to={`/ak/`}><div className={grid.state}>AK</div></Link>
      <Link className={`${grid.stateLink} ${grid.me}`} to={`/me/`}><div className={grid.state}>ME</div></Link>
      <Link className={`${grid.stateLink} ${grid.vt}`} to={`/vt/`}><div className={grid.state}>VT</div></Link>
      <Link className={`${grid.stateLink} ${grid.nh}`} to={`/nh/`}><div className={grid.state}>NH</div></Link>
      <Link className={`${grid.stateLink} ${grid.wa}`} to={`/wa/`}><div className={grid.state}>WA</div></Link>
      <Link className={`${grid.stateLink} ${grid.id}`} to={`/id/`}><div className={grid.state}>ID</div></Link>
      <Link className={`${grid.stateLink} ${grid.mt}`} to={`/mt/`}><div className={grid.state}>MT</div></Link>
      <Link className={`${grid.stateLink} ${grid.nd}`} to={`/nd/`}><div className={grid.state}>ND</div></Link>
      <Link className={`${grid.stateLink} ${grid.mn}`} to={`/mn/`}><div className={grid.state}>MN</div></Link>
      <Link className={`${grid.stateLink} ${grid.wi}`} to={`/wi/`}><div className={grid.state}>WI</div></Link>
      <Link className={`${grid.stateLink} ${grid.mi}`} to={`/mi/`}><div className={grid.state}>MI</div></Link>
      <Link className={`${grid.stateLink} ${grid.ny}`} to={`/ny/`}><div className={grid.state}>NY</div></Link>
      <Link className={`${grid.stateLink} ${grid.ma}`} to={`/ma/`}><div className={grid.state}>MA</div></Link>
      <Link className={`${grid.stateLink} ${grid.ct}`} to={`/ct/`}><div className={grid.state}>CT</div></Link>
      <Link className={`${grid.stateLink} ${grid.ri}`} to={`/ri/`}><div className={grid.state}>RI</div></Link>
      <Link className={`${grid.stateLink} ${grid.or}`} to={`/or/`}><div className={grid.state}>OR</div></Link>
      <Link className={`${grid.stateLink} ${grid.nv}`} to={`/nv/`}><div className={grid.state}>NV</div></Link>
      <Link className={`${grid.stateLink} ${grid.wy}`} to={`/wy/`}><div className={grid.state}>WY</div></Link>
      <Link className={`${grid.stateLink} ${grid.sd}`} to={`/sd/`}><div className={grid.state}>SD</div></Link>
      <Link className={`${grid.stateLink} ${grid.ia}`} to={`/ia/`}><div className={grid.state}>IA</div></Link>
      <Link className={`${grid.stateLink} ${grid.il}`} to={`/il/`}><div className={grid.state}>IL</div></Link>
      <Link className={`${grid.stateLink} ${grid.ii}`} to={`/in/`}><div className={grid.state}>IN</div></Link>
      <Link className={`${grid.stateLink} ${grid.oh}`} to={`/oh/`}><div className={grid.state}>OH</div></Link>
      <Link className={`${grid.stateLink} ${grid.pa}`} to={`/pa/`}><div className={grid.state}>PA</div></Link>
      <Link className={`${grid.stateLink} ${grid.nj}`} to={`/nj/`}><div className={grid.state}>NJ</div></Link>
      <Link className={`${grid.stateLink} ${grid.ca}`} to={`/ca/`}><div className={grid.state}>CA</div></Link>
      <Link className={`${grid.stateLink} ${grid.ut}`} to={`/ut/`}><div className={grid.state}>UT</div></Link>
      <Link className={`${grid.stateLink} ${grid.co}`} to={`/co/`}><div className={grid.state}>CO</div></Link>
      <Link className={`${grid.stateLink} ${grid.ne}`} to={`/ne/`}><div className={grid.state}>NE</div></Link>
      <Link className={`${grid.stateLink} ${grid.mo}`} to={`/mo/`}><div className={grid.state}>MO</div></Link>
      <Link className={`${grid.stateLink} ${grid.ky}`} to={`/ky/`}><div className={grid.state}>KY</div></Link>
      <Link className={`${grid.stateLink} ${grid.wv}`} to={`/wv/`}><div className={grid.state}>WV</div></Link>
      <Link className={`${grid.stateLink} ${grid.va}`} to={`/va/`}><div className={grid.state}>VA</div></Link>
      <Link className={`${grid.stateLink} ${grid.md}`} to={`/md/`}><div className={grid.state}>MD</div></Link>
      <Link className={`${grid.stateLink} ${grid.de}`} to={`/de/`}><div className={grid.state}>DE</div></Link>
      <Link className={`${grid.stateLink} ${grid.az}`} to={`/az/`}><div className={grid.state}>AZ</div></Link>
      <Link className={`${grid.stateLink} ${grid.nm}`} to={`/nm/`}><div className={grid.state}>NM</div></Link>
      <Link className={`${grid.stateLink} ${grid.ks}`} to={`/ks/`}><div className={grid.state}>KS</div></Link>
      <Link className={`${grid.stateLink} ${grid.ar}`} to={`/ar/`}><div className={grid.state}>AR</div></Link>
      <Link className={`${grid.stateLink} ${grid.tn}`} to={`/tn/`}><div className={grid.state}>TN</div></Link>
      <Link className={`${grid.stateLink} ${grid.nc}`} to={`/nc/`}><div className={grid.state}>NC</div></Link>
      <Link className={`${grid.stateLink} ${grid.sc}`} to={`/sc/`}><div className={grid.state}>SC</div></Link>
      <Link className={`${grid.stateLink} ${grid.ok}`} to={`/ok/`}><div className={grid.state}>OK</div></Link>
      <Link className={`${grid.stateLink} ${grid.la}`} to={`/la/`}><div className={grid.state}>LA</div></Link>
      <Link className={`${grid.stateLink} ${grid.ms}`} to={`/ms/`}><div className={grid.state}>MS</div></Link>
      <Link className={`${grid.stateLink} ${grid.al}`} to={`/al/`}><div className={grid.state}>AL</div></Link>
      <Link className={`${grid.stateLink} ${grid.ga}`} to={`/ga/`}><div className={grid.state}>GA</div></Link>
      <Link className={`${grid.stateLink} ${grid.hi}`} to={`/hi/`}><div className={grid.state}>HI</div></Link>
      <Link className={`${grid.stateLink} ${grid.tx}`} to={`/tx/`}><div className={grid.state}>TX</div></Link>
      <Link className={`${grid.stateLink} ${grid.fl}`} to={`/fl/`}><div className={grid.state}>FL</div></Link>
    </div>
    <div className={homes.homeHow}>
      <p>Tile maps make each state the same size to reduce some bias associated with traditional maps, like the <a href="https://www.tableau.com/about/blog/2017/1/viz-whiz-hex-tile-maps-64713" target="_blank" rel="noreferrer">Alaska effect</a>. Although Alaska contains the largest highpoint (by over 6,000 feet!), it needn't dwarf other states 😊</p>
    </div>
    </div>
  )
}
export default Gridmap
