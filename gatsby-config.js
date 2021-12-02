/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
      title: `Jasbir Singh Portfolio`,
      description: `Portfolio build with Gatsby`,
      titleTemplate: `%s | Jasbir Singh Portfolio`,
      url: `https://jasbir-singh-portfolio.netlify.app`,
      twitterUsername: ``,
      image: ``
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        // @ts-ignore
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 1000, // Defaults to 100
        collectionTypes: [`jobs`, `projects`],
        singleTypes: [`about`],
      },
    },
  ],
}
