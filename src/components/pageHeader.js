import * as React from 'react'
import Helmet from "react-helmet"
import * as mast from './masthead.module.css'

const PageHeader = ({ title, subtitle, description, keywords, canonical }) => (
  <>
    <Helmet>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonical} />
    </Helmet>
    <div className={mast.masthead}>
      <h1 className={mast.mastheadTitle}>{title}</h1>
      <p className={mast.mastheadSubtitle}>{subtitle}</p>
    </div>
  </>
)

export default PageHeader
