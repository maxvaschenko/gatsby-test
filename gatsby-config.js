const proxy = require("http-proxy-middleware")

module.exports = {
  siteMetadata: {
    title: `Max Vashchenko`,
    description: `Personal info and blog`,
    author: `Max Vashchenko`,
    titles: {
      blogTitle: 'Blog',
      copyright: '© 2019 Max Vashchenko',
      generalTitle: 'Frontend developer at <a href="https://www.linkedin.com/company/devmaticcompany/about/">Devmatic</a>. Author of <a href="https://t.me/smart_dev">@smart_dev</a>, <a href="https://www.instagram.com/frontenders_notes/">frontenders_notes</a> Instagram blog and <a href="https://www.youtube.com/channel/UCd63YBqE1I_tedyuYATmz6Q">Youtube channel</a>',
      aboutMe: "3 years of experience practicing JavaScript (React + Redux, MobX) in commercial projects. Active study and practice hands-on experience with HTML/CSS, JS and React at courses and pet-projects. Study English, interested in the psychology, history and travels. Easily understand the customer needs, stress-resistant, quick learner. Keen on reading specialized and fundamental CS literature."
    }
  },

  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown-pages`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 756,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          `gatsby-remark-prismjs`,
        ]
      }
    },

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
  developMiddleware: app => {
    app.use(
      "/.netlify/functions/",
      proxy({
        target: "https://crossorigin.me/",
        pathRewrite: {
          "/.netlify/functions/": "",
        },
      })
    )
  },
}
