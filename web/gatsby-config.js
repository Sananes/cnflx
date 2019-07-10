"use strict";

const siteConfig = require("./config.js");
const postCssPlugins = require("./postcss-config.js");

module.exports = {
  siteMetadata: {
    url: siteConfig.url,
    title: siteConfig.title,
    name: siteConfig.name,
    subtitle: siteConfig.subtitle,
    copyright: siteConfig.copyright,
    disqusShortname: siteConfig.disqusShortname,
    menu: siteConfig.menu,
    author: siteConfig.author
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "svgs",
        path: `${__dirname}/src/assets/svg`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/assets/images`
      }
    },
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "yv2hpkrm",
        dataset: "production",
        // watchMode: true,
        // overlayDrafts: true,
        // a token with read permissions is required
        // if you have a private dataset
        token:
          "sk36X3pxPNVXETdMA06lawu4maQCBkvZGdQrD07v0kfT6ymTCooDIG6sRG6mruQegBNIHzevhP7p49EftSobPPqVzfFkqO3lZStha1rsBagVGab7VLcq78r5F0x9CgNeE49QAQ90RQHq8IXkVKxB9aOiBzh0hVO6PynCPxIdglSHmtFtDJ3V"
      }
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-katex",
            options: {
              strict: "ignore"
            }
          },
          {
            resolve: "gatsby-remark-images",
            options: { maxWidth: 960 }
          },
          {
            resolve: "gatsby-remark-responsive-iframe",
            options: { wrapperStyle: "margin-bottom: 1.0725rem" }
          },
          "gatsby-remark-autolink-headers",
          "gatsby-remark-prismjs",
          "gatsby-remark-copy-linked-files",
          "gatsby-remark-smartypants"
        ]
      }
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingIds: [siteConfig.googleAnalyticsId],
        pluginConfig: {
          head: true
        }
      }
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        query: `
          {
            site {
              siteMetadata {
                siteUrl: url
              }
            }
            allSitePage(
              filter: {
                path: { regex: "/^(?!/404/|/404.html|/dev-404-page/)/" }
              }
            ) {
              edges {
                node {
                  path
                }
              }
            }
          }
        `,
        output: "/sitemap.xml",
        serialize: ({ site, allSitePage }) =>
          allSitePage.edges.map(edge => ({
            url: site.siteMetadata.siteUrl + edge.node.path,
            changefreq: "daily",
            priority: 0.7
          }))
      }
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: siteConfig.title,
        short_name: siteConfig.title,
        start_url: "/",
        background_color: "#FFF",
        theme_color: "#009AF1",
        display: "standalone",
        icon: `src/assets/favicons/favicon.png`
      }
    },
    // "gatsby-plugin-page-transitions",
    "gatsby-plugin-offline",
    "gatsby-plugin-catch-links",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-sass",
      options: {
        postCssPlugins: [...postCssPlugins],
        cssLoaderOptions: {
          camelCase: false
        }
      }
    },
    "gatsby-plugin-flow"
  ]
};
