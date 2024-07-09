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
      <link rel="canonical" href="https://highpoint.guide/gear/" />
    </Helmet>
    <div className={mast.masthead}>
      <h1 className={mast.mastheadTitle}>Gear</h1>
      <p className={mast.mastheadSubtitle}>Recommended gear for your next climb</p>
    </div>
    <div className={gear.gearlist}>
      <p>Learn what to bring on your next highpointing journey.</p>
      <p>Unless you're climbing Rainier or Denali, you won't need everything on this list. Consider weather and trail conditions when packing.</p>
      <p>I only recommend gear that I have personally used.</p>
      <h2>Clothing</h2>
      <ul>
        <li><a target="_blank" rel="noreferrer" href="https://amzn.to/3uaUR05">Liner socks</a></li>
        <li>Moisture-wicking T-shirt</li>
        <li>Sun hoodie</li>
        <li><a target="_blank" rel="noreferrer" href="https://amzn.to/3UqKmAP">Neck gaiter</a></li>
        <li><a target="_blank" rel="noreferrer" href="https://amzn.to/48Yva1G">Liner gloves</a></li>
        <li><a target="_blank" rel="noreferrer" href="https://amzn.to/3SqMOWo">Balaclava</a></li>
        <li>Wool hiking socks</li>
        <li>Warm hat</li>
        <li>Insulated gloves</li>
        <li>Fleece pants</li>
        <li>Soft shell mountaineering pants</li>
        <li>Hard shell rain pants</li>
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
        <li>Sandals (or <a target="_blank" rel="noreferrer" href="https://amzn.to/3vN8rYg">Crocs</a>)</li>
        <li>Crampon-compatible boots</li>
      </ul>
      <h2>Food & Hydration</h2>
      <ul>
        <li><a target="_blank" rel="noreferrer" href="https://amzn.to/42elSfN">Energy gels</a></li>
        <li><a target="_blank" rel="noreferrer" href="https://amzn.to/3U9lxJk">Energy bars</a></li>
        <li><a target="_blank" rel="noreferrer" href="https://amzn.to/3S5sXdW">Dehydrated meals</a></li>
        <li><a target="_blank" rel="noreferrer" href="https://amzn.to/3S9YYSg">Electrolyte mix</a></li>
        <li>Water bottles</li>
        <li><a target="_blank" rel="noreferrer" href="https://amzn.to/3S1wFoW">Iodine tablets</a></li>
        <li>Water filter</li>
      </ul>
      <h2>Cookware</h2>
      <ul>
        <li>Small, quick-dry towel</li>
        <li><a target="_blank" rel="noreferrer" href="https://amzn.to/4b7UDre">Backpacking stove</a></li>
        <li><a target="_blank" rel="noreferrer" href="https://amzn.to/3S5tlsU">Fuel</a></li>
        <li>Cookset</li>
        <li>Dishes/bowls</li>
        <li>Utensils (or a <a target="_blank" rel="noreferrer" href="https://amzn.to/47IvKzp">spork</a>)</li>
        <li><a target="_blank" rel="noreferrer" href="https://amzn.to/48Tc4u0">Biodegradable soap</a></li>
        <li>Insulated mug/cup</li>
        <li>Collapsible water container</li>
        <li>Hang bag with 50' of nylon rope</li>
        <li>Bear canister</li>
      </ul>
      <h2>Sanitation</h2>
      <ul>
        <li><a target="_blank" rel="noreferrer" href="https://amzn.to/47G1Z2h">Hand sanitizer</a></li>
        <li>Hand/sanitation trowel</li>
        <li>Toilet paper in a plastic bag</li>
        <li>Blue bag/sanitation bag</li>
        <li><a target="_blank" rel="noreferrer" href="https://amzn.to/3OaWG44">Wipes</a></li>
        <li>Toothbrush and toothpaste and floss</li>
      </ul>
      <h2>Safety</h2>
      <ul>
        <li><a target="_blank" rel="noreferrer" href="https://amzn.to/3vSUpnC">Bear spray</a></li>
        <li>Bear bell</li>
        <li><a target="_blank" rel="noreferrer" href="https://amzn.to/3SpN8Vf">Lighter</a> and matches</li>
        <li>First-aid kit</li>
        <li>Fire starter</li>
        <li>Two itineraries</li>
        <li>Whistle</li>
        <li>Signaling mirror</li>
      </ul>
      <h2>Sun & Bug Protection</h2>
      <ul>
        <li><a target="_blank" rel="noreferrer" href="https://amzn.to/3RZaq2Y">Sunscreen</a></li>
        <li>Sunglasses</li>
        <li>Sun hat</li>
        <li><a target="_blank" rel="noreferrer" href="https://amzn.to/48SyBXI">SPF lip balm</a></li>
        <li><a target="_blank" rel="noreferrer" href="https://amzn.to/3vKociw">Insect repellant</a></li>
      </ul>
      <h2>Navigation</h2>
      <ul>
        <li>GPS app (such as <a target="_blank" rel="noreferrer" href="https://www.alltrails.com/">AllTrails</a>)</li>
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
        <li><a target="_blank" rel="noreferrer" href="https://amzn.to/3HqDF9V">Trekking poles</a></li>
        <li><a target="_blank" rel="noreferrer" href="https://amzn.to/4bg9Arw">Headlamp</a></li>
        <li><a target="_blank" rel="noreferrer" href="https://amzn.to/47IugVW">Batteries</a></li>
      </ul>    
      <h2>Shelter</h2>
      <ul>
        <li><a target="_blank" rel="noreferrer" href="https://amzn.to/3U3WxTR">Emergency blanket</a></li>
        <li><a target="_blank" rel="noreferrer" href="https://amzn.to/3tZSsFC">Bivy bag</a></li>
        <li>Tent</li>
        <li>Sleeping bag</li>
        <li>Sleeping pads</li>
        <li>Inflatable pillow</li>
      </ul>
      <h2>Mountaineering Gear</h2>
      <ul>
        <li><a target="_blank" rel="noreferrer" href="https://amzn.to/4aX1lQO">Helmet</a></li>
        <li><a target="_blank" rel="noreferrer" href="https://amzn.to/47Igu5N">Harness</a></li>
        <li>Ropes</li>
        <li>Locking carabiners</li>
        <li>Non-locking carabiners</li>
        <li>Belay/rappel device</li>
        <li>Prusik cords</li>
        <li><a target="_blank" rel="noreferrer" href="https://amzn.to/424S9pC">Microspikes</a></li>
        <li><a target="_blank" rel="noreferrer" href="https://amzn.to/48GDuU2">Crampons</a></li>
        <li><a target="_blank" rel="noreferrer" href="https://amzn.to/42nlBYd">Ice axe</a></li>
        <li>Folding shovel</li>
        <li>Probe</li>
        <li>Ski goggles</li>
        <li><a target="_blank" rel="noreferrer" href="https://amzn.to/4b4yTMY">Glacier glasses</a></li>
      </ul>
    </div>
    </Layout>
  )
}

export default GearPage
