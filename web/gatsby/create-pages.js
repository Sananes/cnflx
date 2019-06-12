"use strict";

const path = require("path");
const _ = require("lodash");

const createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // Homepage
  createPage({
    path: "/",
    component: path.resolve("./src/pages/Homepage/Homepage.js")
  });

  // 404
  createPage({
    path: "/404",
    component: path.resolve("./src/templates/not-found-template.js")
  });

  // Integrations
  createPage({
    path: "/integrations",
    component: path.resolve("./src/pages/Integrations/Integrations.js")
  });

  createPage({
    path: "/pricing",
    component: path.resolve("./src/pages/PricingPage/PricingPage.js")
  });

  // Posts and pages from markdown
  const result = await graphql(`
    {
      allSanityIntegration {
        edges {
          node {
            name
            slug {
              current
            }
          }
        }
      }
    }
  `);

  // const { edges } = result.data.allMarkdownRemark;

  // _.each(edges, edge => {
  //   if (_.get(edge, "node.frontmatter.template") === "page") {
  //     createPage({
  //       path: edge.node.fields.slug,
  //       component: path.resolve("./src/templates/page-template.js"),
  //       context: { slug: edge.node.fields.slug }
  //     });
  //   } else if (_.get(edge, "node.frontmatter.template") === "post") {
  //     createPage({
  //       path: edge.node.fields.slug,
  //       component: path.resolve("./src/templates/post-template.js"),
  //       context: { slug: edge.node.fields.slug }
  //     });
  //   }
  // });

  // Integration pages

  const integrations = result.data.allSanityIntegration.edges.map(
    ({ node }) => node
  );

  integrations.forEach(integration => {
    actions.createPage({
      path: "integration/" + integration.slug.current,
      component: path.resolve("./src/pages/IntegrationPage/IntegrationPage.js"),
      context: {
        slug: integration.slug.current
      }
    });
  });
};

module.exports = createPages;
