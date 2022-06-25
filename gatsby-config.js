module.exports = {
    siteMetadata: {
      title: "U.S. Highpoint Guide",
      description: "An interactive guidebook for climbing all fifty U.S. state highpoints.",
      siteUrl: "https://highpoint.guide",
      image: "../images/logo.png",
      tags: "highpoints, US state highpoints, highpointing guide, highpointing, highpointers",
      twitterUsername: "@justinandersun",
    },    
    plugins: [
      "gatsby-plugin-sitemap",
      "gatsby-plugin-image",
      "gatsby-plugin-sharp",
      {
        resolve: "gatsby-source-filesystem",
        options: {
          name: `guides`,
          path: `${__dirname}/guides`,
        },
      },
      "gatsby-plugin-mdx",
      "gatsby-transformer-sharp",
      "gatsby-plugin-react-helmet",
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
