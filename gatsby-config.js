module.exports = {
    siteMetadata: {
      title: "U.S. Highpoint Guide",
      description: "An interactive guidebook for climbing all fifty U.S. state highpoints.",
      siteUrl: "https://highpoint.guide",
      image: "../images/logo.png",
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
      // Favicons
      {
        resolve: 'gatsby-plugin-manifest',
        options: {
          icon: 'src/images/logo.png',
        },
      },
    ],
}
