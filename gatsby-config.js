module.exports = {
    siteMetadata: {
      title: "U.S. Highpoint Guide",
      description: "An interactive guidebook for climbing all fifty U.S. state highpoints.",
      url: "https://highpoint.guide",
      image: "../images/logo.png",
      tags: "highpoints, US state highpoints, highpointing guide, highpointing, highpointers",
      twitterUsername: "@justinandersun",
    },
    plugins: [
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
      {
        resolve: `gatsby-plugin-google-analytics`,
        options: {
          trackingId: "G-QPB1CXCKKR",
          head: false,
          anonymize: true,
          respectDNT: true,
          exclude: ["/preview/**", "/do-not-track/me/too/"],
          pageTransitionDelay: 0,
          optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
          experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
          variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
          defer: false,
          sampleRate: 5,
          siteSpeedSampleRate: 10,
          cookieDomain: "example.com",
          enableWebVitalsTracking: true,
        },
      },
    ],
}
