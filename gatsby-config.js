module.exports = {
    siteMetadata: {
      title: `Highpoint Guide`,
    },
    plugins: [
      "gatsby-plugin-image",
      "gatsby-plugin-sharp",
      {
        resolve: "gatsby-source-filesystem",
        options: {
          name: `guides`,
          path: `${__dirname}/guides`,
        }
      },
    ],
}
