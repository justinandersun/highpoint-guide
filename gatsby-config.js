module.exports = {
    siteMetadata: {
      title: `U.S. Highpoint Guide`,
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
    ],
}
