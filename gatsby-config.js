module.exports = {
    siteMetadata: {
      title: "U.S. Highpoint Guide",
      description: "An interactive guidebook for climbing all fifty U.S. state highpoints.",
      siteUrl: "https://highpoint.guide",
      image: "/og-image.png",
      tags: "highpoints, US state highpoints, highpointing guide, highpointing, highpointers, list of US highpoints",
      twitterUsername: "@justinandersun",
    },
    plugins: [
      "gatsby-plugin-image",
      "gatsby-plugin-sharp",
      {
        resolve: "gatsby-source-filesystem",
        options: {
          name: `guides`,
          path: `${__dirname}/src/guides`,
        },
      },
      // Kept separate from the guides above: a lighter frontmatter schema,
      // and its pages are created explicitly in gatsby-node.js rather than
      // via the File System Route API, so the two collections never collide.
      {
        resolve: "gatsby-source-filesystem",
        options: {
          name: `blog`,
          path: `${__dirname}/src/blog`,
        },
      },
      "gatsby-plugin-mdx",
      "gatsby-transformer-sharp",
      "gatsby-plugin-react-helmet",
      // HTML Attributes
      {
        resolve: 'gatsby-plugin-html-attributes',
        options: {
          lang: 'en'
        },
      },
      // Google Analytics
      {
        resolve: `gatsby-plugin-google-gtag`,
        options: {
          trackingIds: [
          "G-QPB1CXCKKR",
          ],
          pluginConfig: {
            head: true
          },
        },
      },
      // Favicons / home screen install
      {
        resolve: 'gatsby-plugin-manifest',
        options: {
          name: 'U.S. Highpoint Guide',
          short_name: 'Highpoint Guide',
          start_url: '/',
          background_color: '#ffffff',
          theme_color: '#212121',
          display: 'standalone',
          lang: 'en',
          icon: 'src/images/logo.png',
          // Required so gatsby-plugin-offline's service worker can match these
          // icon URLs for caching -- it can't resolve cache-busted query strings.
          cache_busting_mode: 'none',
        },
      },
      // Offline support -- must come after gatsby-plugin-manifest so the
      // manifest/icons it generates are included in the precache.
      {
        resolve: 'gatsby-plugin-offline',
        options: {
          // Scans these pages' HTML for extra JS chunks to precache (e.g. the
          // shared guide-page template component) beyond the default app shell.
          precachePages: ['/*'],
        },
      },
      // Sitemap
      "gatsby-plugin-sitemap",
    ],
}
