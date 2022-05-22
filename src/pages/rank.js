import * as React from 'react'
import Helmet from "react-helmet"
import { withPrefix } from "gatsby"
import Layout from '../components/layout'
import {
  masthead,
  mastheadTitle,
  mastheadSubtitle,
} from '../components/masthead.module.css'
import * as ranked from '../components/rank.module.css'

const RankPage = () => {
  return (
    <Layout pageTitle="Rankings">
    <div className={masthead}>
      <h1 className={mastheadTitle}>Rankings</h1>
      <p className={mastheadSubtitle}>Highpoints by height, length, and difficulty</p>
    </div>
    <div>
      <div className={ranked.rankBox}>
        <p>All fifty U.S. highpoints by elevation, gain, distance, difficulty, and effort.</p>
        <p><span className={ranked.dimension}>Elevation</span> Height of the highpoint, measured in feet.</p>
        <p><span className={ranked.dimension}>Gain</span> Elevation gained on the most popular route, measured in feet.</p>
        <p><span className={ranked.dimension}>Distance</span> Length traveled on the most popular route, measured in miles.</p>
        <p><span className={ranked.dimension}>Difficulty</span> Subjective rating of the highpoint's difficulty, measured on a 0 to 10 scale per the <a href="https://www.summitpost.org/martin-classification-of-difficulty-for-u-s-state-highpoints/1007040" target="_blank">Martin Classification</a>.</p>
        <p><span className={ranked.dimension}>Effort</span> Subjective rating of the physical effort needed to summit, measured on a 0 to 1000 scale per the <a href="https://www.summitpost.org/the-effort-scale-of-highpointing-the-fifty-us-states/1046476" target="_blank">VanderHeide Effort Scale</a>.</p>
        <p><span className={ranked.dimension}>Rank</span> Overall rank of the highpoint, calculated by averaging the ranks of the five dimensions above.</p>
      </div>
      <table id="hprank">
      <thead>
        <tr>
          <th title="state" onclick="sortTableAlpha(0)">State</th>
          <th title="highpoint" onclick="sortTableAlpha(1)">Highpoint</th>
          <th title="elevation" onclick="sortTableNum(2)">Elevation (Feet)</th>
          <th title="gain" onclick="sortTableNum(3)">Gain (Feet)</th>
          <th title="distance" onclick="sortTableNum(4)">Distance (Miles)</th>
          <th title="difficulty" onclick="sortTableNum(5)">Difficulty</th>
          <th title="effort" onclick="sortTableNum(6)">Effort</th>
          <th title="rank" onclick="sortTableNum(7)">Rank</th>
        </tr>
      </thead>
      <tbody><tr>
      <td>Alaska</td>
      <td>Denali</td>
      <td>20320</td>
      <td>24500</td>
      <td>56</td>
      <td>10</td>
      <td>1000</td>
      <td>1</td>
      </tr>
      <tr>
      <td>Wyoming</td>
      <td>Gannett Peak</td>
      <td>13804</td>
      <td>8650</td>
      <td>40.4</td>
      <td>9</td>
      <td>506</td>
      <td>2</td>
      </tr>
      <tr>
      <td>Washington</td>
      <td>Mount Rainier</td>
      <td>14411</td>
      <td>9100</td>
      <td>16</td>
      <td>9</td>
      <td>366</td>
      <td>3</td>
      </tr>
      <tr>
      <td>Montana</td>
      <td>Granite Peak</td>
      <td>12799</td>
      <td>7700</td>
      <td>22.2</td>
      <td>9</td>
      <td>368</td>
      <td>4</td>
      </tr>
      <tr>
      <td>California</td>
      <td>Mount Whitney</td>
      <td>14494</td>
      <td>6750</td>
      <td>21.4</td>
      <td>7</td>
      <td>263</td>
      <td>5</td>
      </tr>
      <tr>
      <td>Utah</td>
      <td>Kings Peak</td>
      <td>13528</td>
      <td>5350</td>
      <td>28.8</td>
      <td>7</td>
      <td>291</td>
      <td>6</td>
      </tr>
      <tr>
      <td>Colorado</td>
      <td>Mount Elbert</td>
      <td>14440</td>
      <td>5000</td>
      <td>9</td>
      <td>6</td>
      <td>147</td>
      <td>7</td>
      </tr>
      <tr>
      <td>Oregon</td>
      <td>Mount Hood</td>
      <td>11239</td>
      <td>5300</td>
      <td>8</td>
      <td>8</td>
      <td>222</td>
      <td>8</td>
      </tr>
      <tr>
      <td>Idaho</td>
      <td>Borah Peak</td>
      <td>12662</td>
      <td>5550</td>
      <td>6.8</td>
      <td>8</td>
      <td>181</td>
      <td>9</td>
      </tr>
      <tr>
      <td>Nevada</td>
      <td>Boundary Peak</td>
      <td>13140</td>
      <td>4400</td>
      <td>7.4</td>
      <td>6</td>
      <td>126</td>
      <td>10</td>
      </tr>
      <tr>
      <td>Arizona</td>
      <td>Humphreys Peak</td>
      <td>12633</td>
      <td>3500</td>
      <td>9</td>
      <td>6</td>
      <td>120</td>
      <td>11</td>
      </tr>
      <tr>
      <td>New York</td>
      <td>Mount Marcy</td>
      <td>5344</td>
      <td>3200</td>
      <td>14.8</td>
      <td>5</td>
      <td>151</td>
      <td>12</td>
      </tr>
      <tr>
      <td>Maine</td>
      <td>Katahdin</td>
      <td>5268</td>
      <td>4200</td>
      <td>10.4</td>
      <td>5</td>
      <td>141</td>
      <td>13</td>
      </tr>
      <tr>
      <td>New Mexico</td>
      <td>Wheeler Peak</td>
      <td>13161</td>
      <td>3250</td>
      <td>6.2</td>
      <td>6</td>
      <td>98</td>
      <td>14</td>
      </tr>
      <tr>
      <td>Texas</td>
      <td>Guadalupe Peak</td>
      <td>8749</td>
      <td>2950</td>
      <td>8.4</td>
      <td>5</td>
      <td>106</td>
      <td>15</td>
      </tr>
      <tr>
      <td>Virginia</td>
      <td>Mount Rogers</td>
      <td>5729</td>
      <td>1500</td>
      <td>8.6</td>
      <td>4</td>
      <td>81</td>
      <td>16</td>
      </tr>
      <tr>
      <td>Oklahoma</td>
      <td>Black Mesa</td>
      <td>4975</td>
      <td>775</td>
      <td>8.6</td>
      <td>4</td>
      <td>68</td>
      <td>17</td>
      </tr>
      <tr>
      <td>South Dakota</td>
      <td>Black Elk Peak</td>
      <td>7242</td>
      <td>1500</td>
      <td>5.8</td>
      <td>4</td>
      <td>64</td>
      <td>18</td>
      </tr>
      <tr>
      <td>Minnesota</td>
      <td>Eagle Mountain</td>
      <td>2301</td>
      <td>600</td>
      <td>7</td>
      <td>4</td>
      <td>55</td>
      <td>19</td>
      </tr>
      <tr>
      <td>Vermont</td>
      <td>Mount Mansfield</td>
      <td>4393</td>
      <td>550</td>
      <td>2.8</td>
      <td>3</td>
      <td>28</td>
      <td>20</td>
      </tr>
      <tr>
      <td>Connecticut</td>
      <td>Mount Frissell-South Slope</td>
      <td>2380</td>
      <td>450</td>
      <td>3.6</td>
      <td>3</td>
      <td>31</td>
      <td>21</td>
      </tr>
      <tr>
      <td>North Dakota</td>
      <td>White Butte</td>
      <td>3506</td>
      <td>400</td>
      <td>3.4</td>
      <td>2</td>
      <td>29</td>
      <td>22</td>
      </tr>
      <tr>
      <td>Hawaii</td>
      <td>Mauna Kea</td>
      <td>13796</td>
      <td>230</td>
      <td>0.4</td>
      <td>2</td>
      <td>7</td>
      <td>23</td>
      </tr>
      <tr>
      <td>Maryland</td>
      <td>Backbone Mountain</td>
      <td>3360</td>
      <td>750</td>
      <td>2.2</td>
      <td>3</td>
      <td>27</td>
      <td>24</td>
      </tr>
      <tr>
      <td>Tennessee</td>
      <td>Clingmans Dome</td>
      <td>6643</td>
      <td>330</td>
      <td>1</td>
      <td>2</td>
      <td>12</td>
      <td>25</td>
      </tr>
      <tr>
      <td>Georgia</td>
      <td>Brasstown Bald</td>
      <td>4784</td>
      <td>400</td>
      <td>1</td>
      <td>2</td>
      <td>1</td>
      <td>26</td>
      </tr>
      <tr>
      <td>Illinois</td>
      <td>Charles Mound</td>
      <td>1235</td>
      <td>275</td>
      <td>2.5</td>
      <td>2</td>
      <td>21</td>
      <td>27</td>
      </tr>
      <tr>
      <td>North Carolina</td>
      <td>Mount Mitchell</td>
      <td>6684</td>
      <td>100</td>
      <td>0.2</td>
      <td>1</td>
      <td>3</td>
      <td>28</td>
      </tr>
      <tr>
      <td>Arkansas</td>
      <td>Magazine Mountain</td>
      <td>2753</td>
      <td>225</td>
      <td>1</td>
      <td>2</td>
      <td>10</td>
      <td>29</td>
      </tr>
      <tr>
      <td>Louisiana</td>
      <td>Driskill Mountain</td>
      <td>535</td>
      <td>150</td>
      <td>1.8</td>
      <td>2</td>
      <td>14</td>
      <td>30</td>
      </tr>
      <tr>
      <td>West Virginia</td>
      <td>Spruce Knob</td>
      <td>4863</td>
      <td>20</td>
      <td>0.3</td>
      <td>1</td>
      <td>2</td>
      <td>31</td>
      </tr>
      <tr>
      <td>Wisconsin</td>
      <td>Timms Hill</td>
      <td>1951</td>
      <td>120</td>
      <td>0.4</td>
      <td>1</td>
      <td>5</td>
      <td>32</td>
      </tr>
      <tr>
      <td>South Carolina</td>
      <td>Sassafras Mountain</td>
      <td>3533</td>
      <td>50</td>
      <td>0.15</td>
      <td>1</td>
      <td>2</td>
      <td>33</td>
      </tr>
      <tr>
      <td>Missouri</td>
      <td>Taum Sauk Mountain</td>
      <td>1772</td>
      <td>30</td>
      <td>0.4</td>
      <td>1</td>
      <td>3</td>
      <td>34</td>
      </tr>
      <tr>
      <td>New Hampshire</td>
      <td>Mount Washington</td>
      <td>6288</td>
      <td>20</td>
      <td>0.1</td>
      <td>1</td>
      <td>0</td>
      <td>35</td>
      </tr>
      <tr>
      <td>Kentucky</td>
      <td>Black Mountain</td>
      <td>4145</td>
      <td>30</td>
      <td>0.1</td>
      <td>1</td>
      <td>1</td>
      <td>36</td>
      </tr>
      <tr>
      <td>New Jersey</td>
      <td>High Point</td>
      <td>1803</td>
      <td>40</td>
      <td>0.2</td>
      <td>1</td>
      <td>2</td>
      <td>37</td>
      </tr>
      <tr>
      <td>Nebraska</td>
      <td>Panorama Point</td>
      <td>5424</td>
      <td>0</td>
      <td>0.1</td>
      <td>1</td>
      <td>0</td>
      <td>38</td>
      </tr>
      <tr>
      <td>Massachusetts</td>
      <td>Mount Greylock</td>
      <td>3491</td>
      <td>20</td>
      <td>0.1</td>
      <td>1</td>
      <td>1</td>
      <td>39</td>
      </tr>
      <tr>
      <td>Kansas</td>
      <td>Mount Sunflower</td>
      <td>4039</td>
      <td>0</td>
      <td>0.1</td>
      <td>1</td>
      <td>0</td>
      <td>40</td>
      </tr>
      <tr>
      <td>Michigan</td>
      <td>Mount Arvon</td>
      <td>1979</td>
      <td>10</td>
      <td>0.1</td>
      <td>1</td>
      <td>0</td>
      <td>41</td>
      </tr>
      <tr>
      <td>Rhode Island</td>
      <td>Jerimoth Hill</td>
      <td>812</td>
      <td>0</td>
      <td>0.2</td>
      <td>1</td>
      <td>1</td>
      <td>42</td>
      </tr>
      <tr>
      <td>Pennsylvania</td>
      <td>Mount Davis</td>
      <td>3213</td>
      <td>0</td>
      <td>0.1</td>
      <td>1</td>
      <td>0</td>
      <td>43</td>
      </tr>
      <tr>
      <td>Alabama</td>
      <td>Cheaha Mountain</td>
      <td>2407</td>
      <td>0</td>
      <td>0.1</td>
      <td>1</td>
      <td>0</td>
      <td>44</td>
      </tr>
      <tr>
      <td>Iowa</td>
      <td>Hawkeye Point</td>
      <td>1670</td>
      <td>0</td>
      <td>0.1</td>
      <td>1</td>
      <td>0</td>
      <td>45</td>
      </tr>
      <tr>
      <td>Ohio</td>
      <td>Campbell Hill</td>
      <td>1550</td>
      <td>0</td>
      <td>0.1</td>
      <td>1</td>
      <td>0</td>
      <td>46</td>
      </tr>
      <tr>
      <td>Indiana</td>
      <td>Hoosier Hill</td>
      <td>1257</td>
      <td>0</td>
      <td>0.1</td>
      <td>1</td>
      <td>0</td>
      <td>47</td>
      </tr>
      <tr>
      <td>Mississippi</td>
      <td>Woodall Mountain</td>
      <td>806</td>
      <td>0</td>
      <td>0.1</td>
      <td>1</td>
      <td>0</td>
      <td>48</td>
      </tr>
      <tr>
      <td>Delaware</td>
      <td>Ebright Azimuth</td>
      <td>448</td>
      <td>0</td>
      <td>0.1</td>
      <td>1</td>
      <td>0</td>
      <td>49</td>
      </tr>
      <tr>
      <td>Florida</td>
      <td>Britton Hill</td>
      <td>345</td>
      <td>0</td>
      <td>0.1</td>
      <td>1</td>
      <td>0</td>
      <td>50</td>
      </tr>
      </tbody>
      </table>
    </div>
    <Helmet>
      <script src={withPrefix('ranktable.js')} type="text/javascript" />
    </Helmet>
    </Layout>
  )
}

export default RankPage
