import * as React from 'react'
import { Link } from 'gatsby'
import Helmet from "react-helmet"
import Layout from '../components/layout'
import * as mast from '../components/masthead.module.css'
import * as ranked from '../components/rank.module.css'

const RankPage = () => {

  // Alphabetical Sort
  const sortTableAlpha = n => () => {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("hprank");
    switching = true;
    dir = "asc";
    console.log("Alpha sort is called");
    while (switching) {
      switching = false;
      rows = table.rows;
      for (i = 1; i < (rows.length - 1); i++) {
        shouldSwitch = false;
        x = rows[i].getElementsByTagName("TD")[n];
        y = rows[i + 1].getElementsByTagName("TD")[n];
        if (dir === "asc") {
          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            shouldSwitch = true;
            break;
          }
        } else if (dir === "desc") {
          if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
            shouldSwitch = true;
            break;
          }
        }
      }
      if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        switchcount ++;
      } else {
        if (switchcount === 0 && dir === "asc") {
          dir = "desc";
          switching = true;
        }
      }
    }
  }

  // Numeric Sort
  const sortTableNum = n => () => {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("hprank");
    switching = true;
    dir = "asc";
    console.log("Num sort is called");
    while (switching) {
      switching = false;
      rows = table.rows;
      for (i = 1; i < (rows.length - 1); i++) {
        shouldSwitch = false;
        x = rows[i].getElementsByTagName("TD")[n];
        y = rows[i + 1].getElementsByTagName("TD")[n];
        if (dir === "asc") {
          if (parseInt(x.innerHTML) < parseInt(y.innerHTML)) {
            shouldSwitch= true;
            break;
          }
        } else if (dir === "desc") {
          if (parseInt(x.innerHTML) > parseInt(y.innerHTML)) {
            shouldSwitch = true;
            break;
          }
        }
      }
      if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        switchcount ++;
      } else {
        if (switchcount === 0 && dir === "asc") {
          dir = "desc";
          switching = true;
        }
      }
    }
  }

  return (
    <Layout pageTitle="Ranking">
    <Helmet>
      <meta name="description" content="Ranking the U.S. Highpoints by elevation, distance, difficult, and effort." />
      <meta name="keywords" content="US highpoints ranked, most difficult US highpoint, list of US highpoints"/>
      <link rel="canonical" href="https://highpoint.guide/rank/" />
    </Helmet>
    <div className={mast.masthead}>
      <h1 className={mast.mastheadTitle}>Ranking</h1>
      <p className={mast.mastheadSubtitle}>Highpoints by height, length, and difficulty</p>
    </div>
    <div>
      <div className={ranked.rankBox}>
        <p>All fifty U.S. highpoints by elevation, gain, distance, difficulty, and effort.</p>
        <ul>
          <li><span className={ranked.dimension}>Elevation:</span> Height of the highpoint, measured in feet.</li>
          <li><span className={ranked.dimension}>Gain:</span> Elevation gained on the most popular route, measured in feet.</li>
          <li><span className={ranked.dimension}>Distance:</span> Length traveled on the most popular route, measured in miles.</li>
          <li><span className={ranked.dimension}>Difficulty:</span> Subjective rating of the highpoint's difficulty, measured on a 0 to 10 scale per the <a href="https://www.summitpost.org/martin-classification-of-difficulty-for-u-s-state-highpoints/1007040" target="_blank" rel="noreferrer">Martin Classification</a>.</li>
          <li><span className={ranked.dimension}>Effort:</span> Subjective rating of the physical effort needed to summit, measured on a 0 to 1000 scale per the <a href="https://www.summitpost.org/the-effort-scale-of-highpointing-the-fifty-us-states/1046476" target="_blank" rel="noreferrer">VanderHeide Effort Scale</a>.</li>
        </ul>
      </div>
      <table id="hprank">
      <thead>
        <tr>
          <th title="state" onClick={sortTableAlpha(0)}>State &#9660;</th>
          <th title="highpoint" onClick={sortTableAlpha(1)}>Highpoint &#9660;</th>
          <th title="elevation" onClick={sortTableNum(2)}>Elevation (Feet) &#9660;</th>
          <th title="gain" onClick={sortTableNum(3)}>Gain (Feet) &#9660;</th>
          <th title="distance" onClick={sortTableNum(4)}>Distance (Miles) &#9660;</th>
          <th title="difficulty" onClick={sortTableNum(5)}>Difficulty &#9660;</th>
          <th title="effort" onClick={sortTableNum(6)}>Effort &#9660;</th>
        </tr>
      </thead>
      <tbody><tr>
        <td><span hidden>Alaska</span><Link to={`/ak/`}>Alaska</Link></td>
        <td>Denali</td>
        <td>20320</td>
        <td>24500</td>
        <td>56</td>
        <td>10</td>
        <td>1000</td>
      </tr>
      <tr>
        <td><span hidden>Wyoming</span><Link to={`/wy/`}>Wyoming</Link></td>
        <td>Gannett Peak</td>
        <td>13804</td>
        <td>8650</td>
        <td>40.4</td>
        <td>9</td>
        <td>506</td>
      </tr>
      <tr>
        <td><span hidden>Washington</span><Link to={`/wa/`}>Washington</Link></td>
        <td>Mount Rainier</td>
        <td>14411</td>
        <td>9100</td>
        <td>16</td>
        <td>9</td>
        <td>366</td>
      </tr>
      <tr>
        <td><span hidden>Montana</span><Link to={`/mt/`}>Montana</Link></td>
        <td>Granite Peak</td>
        <td>12799</td>
        <td>7700</td>
        <td>22.2</td>
        <td>9</td>
        <td>368</td>
      </tr>
      <tr>
        <td><span hidden>California</span><Link to={`/ca/`}>California</Link></td>
        <td>Mount Whitney</td>
        <td>14494</td>
        <td>6750</td>
        <td>21.4</td>
        <td>7</td>
        <td>263</td>
      </tr>
      <tr>
        <td><span hidden>Utah</span><Link to={`/ut/`}>Utah</Link></td>
        <td>Kings Peak</td>
        <td>13528</td>
        <td>5350</td>
        <td>28.8</td>
        <td>7</td>
        <td>291</td>
      </tr>
      <tr>
        <td><span hidden>Colorado</span><Link to={`/co/`}>Colorado</Link></td>
        <td>Mount Elbert</td>
        <td>14440</td>
        <td>5000</td>
        <td>9</td>
        <td>6</td>
        <td>147</td>
      </tr>
      <tr>
        <td><span hidden>Oregon</span><Link to={`/or/`}>Oregon</Link></td>
        <td>Mount Hood</td>
        <td>11239</td>
        <td>5300</td>
        <td>8</td>
        <td>8</td>
        <td>222</td>
      </tr>
      <tr>
        <td><span hidden>Idaho</span><Link to={`/id/`}>Idaho</Link></td>
        <td>Borah Peak</td>
        <td>12662</td>
        <td>5550</td>
        <td>6.8</td>
        <td>8</td>
        <td>181</td>
      </tr>
      <tr>
        <td><span hidden>Nevada</span><Link to={`/nv/`}>Nevada</Link></td>
        <td>Boundary Peak</td>
        <td>13140</td>
        <td>4400</td>
        <td>7.4</td>
        <td>6</td>
        <td>126</td>
      </tr>
      <tr>
        <td><span hidden>Arizona</span><Link to={`/az/`}>Arizona</Link></td>
        <td>Humphreys Peak</td>
        <td>12633</td>
        <td>3500</td>
        <td>9</td>
        <td>6</td>
        <td>120</td>
      </tr>
      <tr>
        <td><span hidden>New York</span><Link to={`/ny/`}>New York</Link></td>
        <td>Mount Marcy</td>
        <td>5344</td>
        <td>3200</td>
        <td>14.8</td>
        <td>5</td>
        <td>151</td>
      </tr>
      <tr>
        <td><span hidden>Maine</span><Link to={`/me/`}>Maine</Link></td>
        <td>Katahdin</td>
        <td>5268</td>
        <td>4200</td>
        <td>10.4</td>
        <td>5</td>
        <td>141</td>
      </tr>
      <tr>
        <td><span hidden>New Mexico</span><Link to={`/nm/`}>New Mexico</Link></td>
        <td>Wheeler Peak</td>
        <td>13161</td>
        <td>3250</td>
        <td>6.2</td>
        <td>6</td>
        <td>98</td>
      </tr>
      <tr>
        <td><span hidden>Texas</span><Link to={`/tx/`}>Texas</Link></td>
        <td>Guadalupe Peak</td>
        <td>8749</td>
        <td>2950</td>
        <td>8.4</td>
        <td>5</td>
        <td>106</td>
      </tr>
      <tr>
        <td><span hidden>Virginia</span><Link to={`/va/`}>Virginia</Link></td>
        <td>Mount Rogers</td>
        <td>5729</td>
        <td>1500</td>
        <td>8.6</td>
        <td>4</td>
        <td>81</td>
      </tr>
      <tr>
        <td><span hidden>Oklahoma</span><Link to={`/ok/`}>Oklahoma</Link></td>
        <td>Black Mesa</td>
        <td>4975</td>
        <td>775</td>
        <td>8.6</td>
        <td>4</td>
        <td>68</td>
      </tr>
      <tr>
        <td><span hidden>South Dakota</span><Link to={`/sd/`}>South Dakota</Link></td>
        <td>Black Elk Peak</td>
        <td>7242</td>
        <td>1500</td>
        <td>5.8</td>
        <td>4</td>
        <td>64</td>
      </tr>
      <tr>
        <td><span hidden>Minnesota</span><Link to={`/mn/`}>Minnesota</Link></td>
        <td>Eagle Mountain</td>
        <td>2301</td>
        <td>600</td>
        <td>7</td>
        <td>4</td>
        <td>55</td>
      </tr>
      <tr>
        <td><span hidden>Vermont</span><Link to={`/vt/`}>Vermont</Link></td>
        <td>Mount Mansfield</td>
        <td>4393</td>
        <td>1053</td>
        <td>2.8</td>
        <td>3</td>
        <td>28</td>
      </tr>
      <tr>
        <td><span hidden>Connecticut</span><Link to={`/ct/`}>Connecticut</Link></td>
        <td>Mount Frissell-South Slope</td>
        <td>2380</td>
        <td>862</td>
        <td>2.3</td>
        <td>3</td>
        <td>31</td>
      </tr>
      <tr>
        <td><span hidden>North Dakota</span><Link to={`/nd/`}>North Dakota</Link></td>
        <td>White Butte</td>
        <td>3506</td>
        <td>400</td>
        <td>3.4</td>
        <td>2</td>
        <td>29</td>
      </tr>
      <tr>
        <td><span hidden>Hawaii</span><Link to={`/hi/`}>Hawaii</Link></td>
        <td>Mauna Kea</td>
        <td>13796</td>
        <td>230</td>
        <td>0.4</td>
        <td>2</td>
        <td>7</td>
      </tr>
      <tr>
        <td><span hidden>Maryland</span><Link to={`/md/`}>Maryland</Link></td>
        <td>Hoye Crest</td>
        <td>3360</td>
        <td>750</td>
        <td>2.2</td>
        <td>3</td>
        <td>27</td>
      </tr>
      <tr>
        <td><span hidden>Tennessee</span><Link to={`/tn/`}>Tennessee</Link></td>
        <td>Kuwohi</td>
        <td>6643</td>
        <td>330</td>
        <td>1</td>
        <td>2</td>
        <td>12</td>
      </tr>
      <tr>
        <td><span hidden>Georgia</span><Link to={`/ga/`}>Georgia</Link></td>
        <td>Brasstown Bald</td>
        <td>4784</td>
        <td>400</td>
        <td>1</td>
        <td>2</td>
        <td>1</td>
      </tr>
      <tr>
        <td><span hidden>Illinois</span><Link to={`/il/`}>Illinois</Link></td>
        <td>Charles Mound</td>
        <td>1235</td>
        <td>275</td>
        <td>2.5</td>
        <td>2</td>
        <td>21</td>
      </tr>
      <tr>
        <td><span hidden>North Carolina</span><Link to={`/nc/`}>North Carolina</Link></td>
        <td>Mount Mitchell</td>
        <td>6684</td>
        <td>100</td>
        <td>0.2</td>
        <td>1</td>
        <td>3</td>
      </tr>
      <tr>
        <td><span hidden>Arkansas</span><Link to={`/ar/`}>Arkansas</Link></td>
        <td>Magazine Mountain</td>
        <td>2753</td>
        <td>225</td>
        <td>1</td>
        <td>2</td>
        <td>10</td>
      </tr>
      <tr>
        <td><span hidden>Louisiana</span><Link to={`/la/`}>Louisiana</Link></td>
        <td>Driskill Mountain</td>
        <td>535</td>
        <td>150</td>
        <td>1.8</td>
        <td>2</td>
        <td>14</td>
      </tr>
      <tr>
        <td><span hidden>West Virginia</span><Link to={`/wv/`}>West Virginia</Link></td>
        <td>Spruce Knob</td>
        <td>4863</td>
        <td>20</td>
        <td>0.3</td>
        <td>1</td>
        <td>2</td>
      </tr>
      <tr>
        <td><span hidden>Wisconsin</span><Link to={`/wi/`}>Wisconsin</Link></td>
        <td>Timms Hill</td>
        <td>1951</td>
        <td>120</td>
        <td>0.4</td>
        <td>1</td>
        <td>5</td>
      </tr>
      <tr>
        <td><span hidden>South Carolina</span><Link to={`/sc/`}>South Carolina</Link></td>
        <td>Sassafras Mountain</td>
        <td>3533</td>
        <td>50</td>
        <td>0.15</td>
        <td>1</td>
        <td>2</td>
      </tr>
      <tr>
        <td><span hidden>Missouri</span><Link to={`/mo/`}>Missouri</Link></td>
        <td>Taum Sauk Mountain</td>
        <td>1772</td>
        <td>30</td>
        <td>0.4</td>
        <td>1</td>
      <td>3</td>
      </tr>
      <tr>
        <td><span hidden>New Hampshire</span><Link to={`/nh/`}>New Hampshire</Link></td>
        <td>Mount Washington</td>
        <td>6288</td>
        <td>20</td>
        <td>0.1</td>
        <td>1</td>
        <td>0</td>
      </tr>
      <tr>
        <td><span hidden>Kentucky</span><Link to={`/ky/`}>Kentucky</Link></td>
        <td>Black Mountain</td>
        <td>4145</td>
        <td>30</td>
        <td>0.1</td>
        <td>1</td>
        <td>1</td>
      </tr>
      <tr>
        <td><span hidden>New Jersey</span><Link to={`/nj/`}>New Jersey</Link></td>
        <td>High Point</td>
        <td>1803</td>
        <td>40</td>
        <td>0.2</td>
        <td>1</td>
        <td>2</td>
      </tr>
      <tr>
        <td><span hidden>Nebraska</span><Link to={`/ne/`}>Nebraska</Link></td>
        <td>Panorama Point</td>
        <td>5424</td>
        <td>0</td>
        <td>0.1</td>
        <td>1</td>
        <td>0</td>
      </tr>
      <tr>
        <td><span hidden>Massachusetts</span><Link to={`/ma/`}>Massachusetts</Link></td>
        <td>Mount Greylock</td>
        <td>3491</td>
        <td>20</td>
        <td>0.1</td>
        <td>1</td>
        <td>1</td>
      </tr>
      <tr>
        <td><span hidden>Kansas</span><Link to={`/ks/`}>Kansas</Link></td>
        <td>Mount Sunflower</td>
        <td>4039</td>
        <td>0</td>
        <td>0.1</td>
        <td>1</td>
        <td>0</td>
      </tr>
      <tr>
        <td><span hidden>Michigan</span><Link to={`/mi/`}>Michigan</Link></td>
        <td>Mount Arvon</td>
        <td>1979</td>
        <td>10</td>
        <td>0.1</td>
        <td>1</td>
        <td>0</td>
      </tr>
      <tr>
        <td><span hidden>Rhode Island</span><Link to={`/ri/`}>Rhode Island</Link></td>
        <td>Jerimoth Hill</td>
        <td>812</td>
        <td>0</td>
        <td>0.2</td>
        <td>1</td>
        <td>1</td>
      </tr>
      <tr>
        <td><span hidden>Pennsylvania</span><Link to={`/pa/`}>Pennsylvania</Link></td>
        <td>Mount Davis</td>
        <td>3213</td>
        <td>0</td>
        <td>0.1</td>
        <td>1</td>
        <td>0</td>
      </tr>
      <tr>
        <td><span hidden>Alabama</span><Link to={`/al/`}>Alabama</Link></td>
        <td>Cheaha Mountain</td>
        <td>2407</td>
        <td>0</td>
        <td>0.1</td>
        <td>1</td>
        <td>0</td>
      </tr>
      <tr>
        <td><span hidden>Iowa</span><Link to={`/ia/`}>Iowa</Link></td>
        <td>Hawkeye Point</td>
        <td>1670</td>
        <td>0</td>
        <td>0.1</td>
        <td>1</td>
        <td>0</td>
      </tr>
      <tr>
        <td><span hidden>Ohio</span><Link to={`/oh/`}>Ohio</Link></td>
        <td>Campbell Hill</td>
        <td>1550</td>
        <td>0</td>
        <td>0.1</td>
        <td>1</td>
        <td>0</td>
      </tr>
      <tr>
        <td><span hidden>Indiana</span><Link to={`/in/`}>Indiana</Link></td>
        <td>Hoosier Hill</td>
        <td>1257</td>
        <td>0</td>
        <td>0.1</td>
        <td>1</td>
        <td>0</td>
      </tr>
      <tr>
        <td><span hidden>Mississippi</span><Link to={`/ms/`}>Mississippi</Link></td>
        <td>Woodall Mountain</td>
        <td>806</td>
        <td>0</td>
        <td>0.1</td>
        <td>1</td>
        <td>0</td>
      </tr>
      <tr>
        <td><span hidden>Delaware</span><Link to={`/de/`}>Delaware</Link></td>
        <td>Ebright Azimuth</td>
        <td>448</td>
        <td>0</td>
        <td>0.1</td>
        <td>1</td>
        <td>0</td>
      </tr>
      <tr>
        <td><span hidden>Florida</span><Link to={`/fl/`}>Florida</Link></td>
        <td>Britton Hill</td>
        <td>345</td>
        <td>0</td>
        <td>0.1</td>
        <td>1</td>
        <td>0</td>
      </tr>
      </tbody>
      </table>
    </div>
    </Layout>
  )
}

export default RankPage
