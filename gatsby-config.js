/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

console.log(process.env.BACKEND_URL)

module.exports = {
  /* Your site config here */
  flags: {
    DEV_SSR: false,
  },
  siteMetadata: {
    title: `Jasbir Singh Portfolio`,
    description: `Portfolio build with Gatsby`,
    titleTemplate: `%s | Jasbir Singh Portfolio`,
    url: `https://jasbir-singh-portfolio.netlify.app`,
    twitterUsername: ``,
    image: ``,
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
        apiURL: `${process.env.BACKEND_URL}`,
        queryLimit: 1000, // Defaults to 100
        collectionTypes: [`jobs`, `projects`],
        singleTypes: [`about`],
      },
    },
  ],
}
