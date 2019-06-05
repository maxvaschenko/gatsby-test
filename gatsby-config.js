module.exports = {
  siteMetadata: {
    title: `Max Vashchenko`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `Max Vashchenko`,
    titles: {
      blogTitle: 'Blog',
      copyright: '© 2019 Max Vashchenko',
      generalTitle: 'Frontend developer at <a href="https://www.linkedin.com/company/devmaticcompany/about/">Devmatic</a>. Author of <a href="https://t.me/smart_dev">@smart_dev</a>, <a href="https://www.instagram.com/frontenders_notes/">frontenders_notes</a> Instagram blog and <a href="https://www.youtube.com/channel/UCd63YBqE1I_tedyuYATmz6Q">Youtube channel</a>'
    }
  },

  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
