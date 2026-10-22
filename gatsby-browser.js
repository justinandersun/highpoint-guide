const GUIDE_CODES = [
  'ak', 'al', 'ar', 'az', 'ca', 'co', 'ct', 'de', 'fl', 'ga',
  'hi', 'ia', 'id', 'il', 'in', 'ks', 'ky', 'la', 'ma', 'md',
  'me', 'mi', 'mn', 'mo', 'ms', 'mt', 'nc', 'nd', 'ne', 'nh',
  'nj', 'nm', 'nv', 'ny', 'oh', 'ok', 'or', 'pa', 'ri', 'sc',
  'sd', 'tn', 'tx', 'ut', 'va', 'vt', 'wa', 'wi', 'wv', 'wy',
]

// gatsby-plugin-offline only caches pages a visitor actually opens. Once the
// service worker takes control, proactively fetch every state guide's page
// data so the whole guide works offline after a single visit -- not just
// whichever states a visitor happened to click into while still online.
exports.onServiceWorkerActive = () => {
  GUIDE_CODES.forEach((code) => {
    fetch(`/page-data/${code}/page-data.json`).catch(() => {})
  })
}
