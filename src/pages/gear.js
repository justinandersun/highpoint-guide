import * as React from 'react'
import Helmet from "react-helmet"
import Layout from '../components/layout'
import * as mast from '../components/masthead.module.css'
import * as gear from '../components/gear.module.css'

const GearPage = () => {
  return (
    <Layout pageTitle="Gear">
    <Helmet>
      <meta name="description" content="Gear for climbing the U.S. highpoints" />
      <meta name="keywords" content="Highpointing gear list, highpoint gear, mountaineering gear list"/>
    </Helmet>
    <div className={mast.masthead}>
      <h1 className={mast.mastheadTitle}>Gear</h1>
      <p className={mast.mastheadSubtitle}>Recommended gear for your next climb</p>
    </div>
    <div className={gear.gearlist}>
      <p>Learn what to bring on your next highpointing journey. Please note that Highpoint Guide earns affiliate income from the links on this page to keep the site running.</p>
      <h2>Clothing</h2>
      <ul>
        <li><a target="_blank" rel="noreferrer" href="https://amzn.to/3uaUR05">Liner socks</a></li>
        <li>Moisture-wicking T-shirt</li>
        <li>Sun hoodie</li>
        <li>Neck gaiter</li>
        <li>Liner gloves</li>
        <li>Balaclava</li>
        <li>Wool socks / hiking socks</li>
        <li>Warm hat</li>
        <li>Insulated gloves</li>
        <li>Fleece pants</li>
        <li>Soft shell pants / mountaineering pants</li>
        <li>Hard shell pants / rain pants</li>
        <li>Long-sleeve T-shirt</li>
        <li>Lightweight fleece jacket</li>
        <li>Insulated jacket</li>
        <li>Hard shell rain jacket</li>
        <li>Soft shell jacket</li>
        <li>Gaiters</li>
      </ul>
      <h2>Footwear</h2>
      <ul>
        <li>Hiking boots</li>
        <li>Trail shoes</li>
        <li>Sandals</li>
        <li>Crampon-compatible boots</li>
      </ul>
      <h2>Food & Hydration</h2>
      <ul>
        <li>Energy gels</li>
        <li>Energy bars</li>
        <li>Dehydrated meals</li>
        <li>Electrolyte mix</li>
        <li>Water bottles</li>
        <li>Iodine tablets</li>
        <li>Water filter</li>
      </ul>
      <h2>Cookware</h2>
      <ul>
        <li>Small, quick-dry towel</li>
        <li>Backpacking stove</li>
        <li>Fuel</li>
        <li>Cookset</li>
        <li>Dishes/bowls</li>
        <li>Spork/eating utensils</li>
        <li>Biodegradable soap</li>
        <li>Insulated mug/cup</li>
        <li>Collapsible water container</li>
        <li>Hang bag with 50' of nylon rope</li>
        <li>Bear canister</li>
      </ul>
      <h2>Sanitation</h2>
      <ul>
        <li>Hand sanitizer</li>
        <li>Hand/sanitation trowel</li>
        <li>Blue bag/sanitation bag</li>
        <li>Wipes</li>
        <li>Toothbrush and toothpaste and floss</li>
      </ul>
      <h2>Safety</h2>
      <ul>
        <li>Bear spray</li>
        <li>Bear bell</li>
        <li>Lighter and matches</li>
        <li>First-aid kit</li>
        <li>Fire starter</li>
        <li>Two itineraries</li>
        <li>Whistle</li>
        <li>Signaling mirror</li>
      </ul>
      <h2>Sun & Bug Protection</h2>
      <ul>
        <li>Sunscreen</li>
        <li>Sunglasses</li>
        <li>Sun hat</li>
        <li>SPF lip balm</li>
        <li>Insect repellant</li>
      </ul>
      <h2>Navigation</h2>
      <ul>
        <li>GPS app</li>
        <li>Map</li>
        <li>Compass</li>
        <li>Battery pack</li>
      </ul>
      <h2>Tools</h2>
      <ul>
        <li>Daypack</li>
        <li>Backpack and rain cover</li>
        <li>Duct tape strips</li>
        <li>Knife</li>
        <li>Multi-tool</li>
        <li>Trekking poles</li>
        <li>Headlamp</li>
        <li>Batteries</li>
      </ul>    
      <h2>Shelter</h2>
      <ul>
        <li>Emergency blanket</li>
        <li>Bivy bag</li>
        <li>Tent</li>
        <li>Sleeping bag</li>
        <li>Sleeping pads</li>
        <li>Inflatable pillow</li>
      </ul>
      <h2>Mountaineering Gear</h2>
      <ul>
        <li>Helmet</li>
        <li>Harness</li>
        <li>Ropes</li>
        <li>Locking carabiners</li>
        <li>Non-locking carabiners</li>
        <li>Belay/rappel device</li>
        <li>Prusik cords</li>
        <li>Microspikes</li>
        <li>Crampons</li>
        <li>Ice axe</li>
        <li>Folding shovel</li>
        <li>Probe</li>
        <li>Goggles</li>
        <li>Glacier glasses</li>
      </ul>
    </div>
    </Layout>
  )
}

export default GearPage
