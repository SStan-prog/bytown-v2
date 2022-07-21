/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,

    {
      resolve: "gatsby-source-prismic",
      options: {
        repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME,
        accessToken: process.env.GATSBY_PRISMIC_ACCESS_TOKEN,
        customTypesApiToken: process.env.PRISMIC_CUSTOM_TYPES_API_TOKEN,
        linkResolver: require("./linkResolver").linkResolver,

        schemas: {
          homepage: require("./src/schemas/homepage.json"),
          page: require("./src/schemas/page.json"),
          sermon_series: require("./src/schemas/sermonseries.json"),
          blog_post: require("./src/schemas/blogpost.json"),
          home: {},
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/content/assets`,
      },
    },
    // {
    //   resolve: "gatsby-plugin-manifest",
    //   options: {
    //     name: `Bytown Church`,
    //     short_name: `Bytown Church`,
    //     start_url: `/`,
    //     background_color: `#F0F8EA`,
    //     theme_color: `#F0F8EA`,
    //     icon: `content/assets/favicon.png`,
    //   },
    // },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`poppins\:,400,700`, `open sans\:,400,700`],
        display: "swap",
      },
    },
  ],
}
