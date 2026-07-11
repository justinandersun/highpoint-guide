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

## Contribute 
1. Fork this repo on GitHub
2. Create a branch
3. Make any needed changes 
4. Create a pull request

Thank you! 
