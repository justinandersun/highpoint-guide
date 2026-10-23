import * as React from 'react'
import { graphql, Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import PageHeader from '../components/pageHeader'
import * as about from '../components/about.module.css'

// In summit order. Highpoint names match each guide's frontmatter; photos are
// src/images/journey/justin-<code>.jpg. Denali (no date) is still to come.
const SUMMITS = [
  ['ma', 'Mount Greylock', '2013-03-02', 'Frost-covered memorial tower on Mount Greylock, with Justin holding his orange turtle flag'],
  ['ri', 'Jerimoth Hill', '2013-03-03', 'Snowy woods and a small summit marker nailed to a tree on Jerimoth Hill'],
  ['pa', 'Mount Davis', '2014-03-01', 'Deep snow beneath the blue Mount Davis elevation sign'],
  ['md', 'Hoye Crest', '2014-03-01', 'Hoye-Crest historical marker and a tall rock cairn in winter'],
  ['wv', 'Spruce Knob', '2014-03-01', 'Overlook railing on Spruce Knob with snow-dusted ridges behind'],
  ['ky', 'Black Mountain', '2014-03-02', 'Summit plaque on a foggy Black Mountain, flag held just above it'],
  ['oh', 'Campbell Hill', '2014-03-03', 'Campbell Hill historical marker at sunset over snow'],
  ['ga', 'Brasstown Bald', '2014-05-24', 'Brasstown Bald observation deck above the Blue Ridge'],
  ['tn', 'Kuwohi', '2014-05-24', 'Kuwohi observation tower with forested ridges and a radio mast behind'],
  ['va', 'Mount Rogers', '2014-05-25', 'Boulder in the spruce forest atop Mount Rogers'],
  ['nc', 'Mount Mitchell', '2014-05-25', 'Railing of the Mount Mitchell summit platform on a hazy day'],
  ['sc', 'Sassafras Mountain', '2014-05-26', 'Sassafras Mountain summit boulder and plaque in green woods'],
  ['al', 'Cheaha Mountain', '2014-07-05', "Alabama's Highest Point sign with the stone summit tower of Cheaha Mountain behind"],
  ['ms', 'Woodall Mountain', '2014-07-05', 'Woodall Mountain register mailbox beside a gravel lot'],
  ['in', 'Hoosier Hill', '2014-08-02', 'Hoosier Hill elevation boulder in the woods'],
  ['mi', 'Mount Arvon', '2015-07-03', 'Blue Mount Arvon summit sign in a sunny forest'],
  ['nh', 'Mount Washington', '2015-09-05', 'Mount Washington summit sign and rocks in evening light'],
  ['vt', 'Mount Mansfield', '2015-09-06', 'Bare rock summit of Mount Mansfield above green valleys'],
  ['ct', 'Mount Frissell-South Slope', '2015-10-31', 'Stone cairn amid fall foliage on Mount Frissell, Justin kneeling beside it'],
  ['nj', 'High Point', '2015-10-31', 'Base of the stone High Point Monument'],
  ['ny', 'Mount Marcy', '2016-01-23', 'Snowy summit of Mount Marcy with the Adirondacks behind'],
  ['de', 'Ebright Azimuth', '2016-01-29', 'Ebright Azimuth historical marker at night in the snow'],
  ['fl', 'Britton Hill', '2016-07-30', "Lakewood Park sign marking Britton Hill as Florida's highest point"],
  ['la', 'Driskill Mountain', '2017-02-04', 'Trail kiosk on wooded Driskill Mountain, Justin also holding a Louisiana sign'],
  ['nv', 'Boundary Peak', '2017-07-01', 'Rocky summit of Boundary Peak in early morning light'],
  ['ne', 'Panorama Point', '2017-07-24', 'Panorama Point monument on the open plains, Justin kneeling beside it'],
  ['ks', 'Mount Sunflower', '2017-07-24', 'Metal sunflower sculpture on the Mount Sunflower prairie'],
  ['mo', 'Taum Sauk', '2017-07-25', 'Missouri highpoint marker in the woods on Taum Sauk Mountain'],
  ['co', 'Mount Elbert', '2018-07-03', 'Rocky summit of Mount Elbert above the Sawatch Range'],
  ['ar', 'Magazine Mountain', '2019-01-27', 'Wooden Mount Magazine Signal Hill sign'],
  ['ok', 'Black Mesa', '2019-01-28', 'Granite obelisk on Black Mesa under gray skies'],
  ['wa', 'Mount Rainier', '2020-09-19', 'Icy summit crater of Mount Rainier, Justin in winter gear'],
  ['tx', 'Guadalupe Peak', '2021-05-15', 'Steel summit pyramid on Guadalupe Peak above the desert'],
  ['az', 'Humphreys Peak', '2021-05-19', 'Volcanic rocks on the summit of Humphreys Peak'],
  ['or', 'Mount Hood', '2021-06-19', 'Snowy summit of Mount Hood with Mount Jefferson in the distance'],
  ['id', 'Borah Peak', '2021-07-17', 'Rocky summit of Borah Peak under hazy skies'],
  ['nm', 'Wheeler Peak', '2021-09-26', 'Rocky summit of Wheeler Peak above the Sangre de Cristo Mountains'],
  ['mn', 'Eagle Mountain', '2021-11-02', 'Eagle Mountain plaque in snowy woods'],
  ['wi', 'Timms Hill', '2021-11-03', 'Wooden Timms Hill observation tower under gray skies'],
  ['ia', 'Hawkeye Point', '2021-11-05', 'Hawkeye Point with the U.S. and Iowa flags flying overhead'],
  ['il', 'Charles Mound', '2022-06-04', 'Charles Mound sign among leafy trees'],
  ['ut', 'Kings Peak', '2022-07-15', 'Summit rocks and sign on Kings Peak in the clouds'],
  ['mt', 'Granite Peak', '2023-07-21', 'Granite summit blocks of Granite Peak under a deep blue sky'],
  ['me', 'Katahdin', '2023-10-05', 'Weathered Katahdin summit sign, Justin standing on top of it'],
  ['nd', 'White Butte', '2024-05-11', 'White Butte overlooking the badlands'],
  ['sd', 'Black Elk Peak', '2024-05-12', 'Stone parapet of Black Elk Peak with granite spires behind'],
  ['hi', 'Mauna Kea', '2024-09-28', "Red cinder at Mauna Kea's summit with observatory domes behind"],
  ['ca', 'Mount Whitney', '2024-10-16', 'Granite summit of Mount Whitney with the Sierra Nevada behind'],
  ['wy', 'Gannett Peak', '2025-07-22', 'Summit boulders on Gannett Peak with snowy Wind River peaks behind'],
  ['ak', 'Denali', null, null],
]

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

// "2013-03-02" -> "2013-Mar-02"
const formatDate = (iso) => {
  const [y, m, d] = iso.split('-')
  return `${y}-${MONTHS[Number(m) - 1]}-${d}`
}

const AboutPage = ({ data }) => {
  const photos = Object.fromEntries(
    data.allFile.nodes.map((node) => [node.name.replace('justin-', ''), node.childImageSharp])
  )
  // Indexes into SUMMITS for the photos that exist, so the lightbox can step through them.
  const withPhotos = SUMMITS.map((s, i) => i).filter((i) => photos[SUMMITS[i][0]])

  const dialogRef = React.useRef(null)
  const [open, setOpen] = React.useState(null) // index into SUMMITS, or null

  React.useEffect(() => {
    const dialog = dialogRef.current
    if (open !== null && !dialog.open) dialog.showModal()
  }, [open])

  const step = (dir) => {
    const pos = withPhotos.indexOf(open)
    setOpen(withPhotos[(pos + dir + withPhotos.length) % withPhotos.length])
  }

  const onDialogKeyDown = (e) => {
    if (e.key === 'ArrowRight') step(1)
    if (e.key === 'ArrowLeft') step(-1)
  }

  // A click on the backdrop lands on the dialog element itself; clicks on its content don't.
  const onDialogClick = (e) => {
    if (e.target === dialogRef.current) dialogRef.current.close()
  }

  const current = open !== null ? SUMMITS[open] : null

  return (
    <Layout pageTitle="About">
      <PageHeader
        title="About"
        subtitle="The person behind the guide"
        description="Meet the person behind U.S. Highpoint Guide and see photos from 49 of the 50 state highpoints."
        keywords="who made Highpoint Guide, US highpointer, 50 state highpoints photos"
        canonical="https://highpoint.guide/about/"
      />
      <div className={about.aboutBody}>
        <div className={about.bio}>
          <GatsbyImage
            image={getImage(data.headshot)}
            alt="Justin grinning on a rocky summit with snowy peaks and alpine lakes behind"
            className={about.headshot}
          />
          <p>Hey, I’m Justin!</p>

          <p>I grew up in Michigan, which is about as flat as it gets. But mountains always fascinated me, and in March 2013 a friend and I road-tripped through New England to summit Mount Greylock with duct tape around our shoes to keep the snow out. I was hooked. My sister made me a blaze orange flag with a turtle on it to represent my slow approach to climbing highpoints. Highpointing went on to shape my twenties and early thirties, pulling me to live in eight states from South Carolina to Washington.</p>

          <p>I’ve climbed Gannett Peak deep in Wyoming’s Wind River Range, scrambled Montana’s Granite Peak unroped via the Southwest Ramp, and needed two attempts on Oregon’s Mount Hood after a May snowstorm turned me around the first time. I’ve loved the low-elevation highpoints too, like Iowa’s proud mosaic amid cornfields. Today I’ve stood on 49 of the 50. Only Denali remains, which I’m procrastinating now that my first child is on the way.</p>

          <p>I built Highpoint Guide in 2022 to share what I learned. Every guide on this site draws on my own time on the trails and covers the routes, logistics, and gear that I found helpful. If a flatlander like me can climb Rainier, Gannett, and Granite, so can you! Highpointing is one of the best ways to explore the less traveled corners of America and its beautiful, diverse landscapes.</p>

          <p>Happy climbing!</p>
          <span className={about.signature}>Justin</span>
        </div>

        <h2 className={about.photoHeading}>My Journey</h2>
        <p className={about.photoSubheading}>49 of 50 summited, 2013–2025</p>
        <div className={about.photoGrid}>
          {SUMMITS.map(([code, highpoint, date, alt], i) => (
            <figure className={about.photoTile} key={code}>
              {photos[code] ? (
                <button type="button" className={about.photoButton} onClick={() => setOpen(i)}>
                  <GatsbyImage image={getImage(photos[code].tile)} alt={alt} className={about.photo} />
                </button>
              ) : (
                <div className={about.photoPlaceholder}>{code.toUpperCase()}</div>
              )}
              <figcaption className={about.photoCaption}>
                <Link to={`/${code}/`} className={about.photoCaptionName}>{highpoint}</Link>
                <span className={about.photoCaptionMeta}>
                  {code.toUpperCase()} · {date ? <time dateTime={date}>{formatDate(date)}</time> : 'One Day'}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
      <dialog
        ref={dialogRef}
        className={about.lightbox}
        aria-label={current ? current[1] : 'Photo'}
        onClose={() => setOpen(null)}
        onKeyDown={onDialogKeyDown}
        onClick={onDialogClick}
      >
        {current && (
          <figure className={about.lightboxFigure}>
            <GatsbyImage
              key={current[0]}
              image={getImage(photos[current[0]].full)}
              alt={current[3]}
              className={about.lightboxImage}
              objectFit="contain"
            />
            <figcaption className={about.lightboxCaption}>
              <Link to={`/${current[0]}/`}>{current[1]}</Link>
              <span>{current[0].toUpperCase()} · <time dateTime={current[2]}>{formatDate(current[2])}</time></span>
            </figcaption>
          </figure>
        )}
        <button type="button" className={about.lightboxClose} onClick={() => dialogRef.current.close()} aria-label="Close">×</button>
        <button type="button" className={`${about.lightboxNav} ${about.lightboxPrev}`} onClick={() => step(-1)} aria-label="Previous photo">‹</button>
        <button type="button" className={`${about.lightboxNav} ${about.lightboxNext}`} onClick={() => step(1)} aria-label="Next photo">›</button>
      </dialog>
    </Layout>
  )
}

export const query = graphql`
  query {
    headshot: file(sourceInstanceName: { eq: "journey" }, name: { eq: "headshot" }) {
      childImageSharp {
        gatsbyImageData(width: 400, aspectRatio: 1, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
      }
    }
    allFile(filter: { sourceInstanceName: { eq: "journey" }, name: { regex: "/^justin-/" } }) {
      nodes {
        name
        childImageSharp {
          tile: gatsbyImageData(
            width: 640
            aspectRatio: 1.3333
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
          full: gatsbyImageData(width: 1600, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
        }
      }
    }
  }
`

export default AboutPage
