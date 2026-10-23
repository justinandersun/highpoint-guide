# Highpoint Guide
An interactive guidebook for climbing the 50 U.S. highpoints.
See it live @ https://highpoint.guide

## Tech Stack
This project is built with Gatsby 4 (React + GraphQL). Each state guide is an MDX file in `src/guides/`, with metadata (elevation, coordinates, difficulty, links, etc.) in frontmatter and the guide content written below it.

## Requirements
- **Node.js 18.x** — this project runs on Gatsby 4, which does not run reliably on newer Node versions (native module and build failures have been observed on Node 20+). If your system's default Node is newer, use [nvm](https://github.com/nvm-sh/nvm) to run this project on Node 18:
  ```
  nvm install 18
  nvm use 18
  ```
- `npm` (bundled with Node)

## Local Development
```
npm install
npm run develop
```
Then open http://localhost:8000. A GraphiQL explorer for the site's data is available at http://localhost:8000/___graphql.

To build and preview the production site:
```
npm run build
npm run serve
```

If `gatsby develop` or `gatsby build` crashes unexpectedly (segfault or cache-related errors), clear Gatsby's cache and try again:
```
npm run clean
```

## Checking Links
Run this a few times per year to catch broken or hijacked links in the state guides:
```
npm run check-links
```
It visits every external link in `src/guides/*.mdx` (the frontmatter links like `official_info` and `weather`, plus links and embeds in the guide text) and prints anything that needs attention:

- **Hijack risk:** the link now redirects to a different website. This is the pattern of an expired domain bought by someone else, so fix these first.
- **Dead:** a 404 or a domain that no longer exists.
- **Error:** a timeout or another error from the site, which may be temporary. Re-run before changing anything.
- **Moved:** the link redirects to a different page on the same website. These still work but are worth updating, since some now land on a generic homepage.
- **Blocked:** the site (AllTrails, SummitPost, Peakbagger) refuses automated checks. Spot-check these by hand.

Expected redirects (Google Maps short links, twitter.com → x.com) are allowlisted at the top of `scripts/check-links.js`.

## Contribute
To report a bug, suggest a correction, or share an idea, please reach out through the [Contact page](https://highpoint.guide/contact/).

Thank you! 
