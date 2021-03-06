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

  // Flex Pricing
  createPage({
    path: "/flex-pricing",
    component: path.resolve("./src/pages/FlexPricing/FlexPricing.js")
  });

  // Integrations
  createPage({
    path: "/integrations",
    component: path.resolve("./src/pages/Integrations/Integrations.js")
  });

  // Product
  createPage({
    path: "/product",
    component: path.resolve("./src/pages/Product/Product.js")
  });

  // Pricing
  createPage({
    path: "/pricing",
    component: path.resolve("./src/pages/PricingPage/PricingPage.js")
  });

  // Signin
  createPage({
    path: "/signin",
    component: path.resolve("./src/pages/User/Signin/Signin.js")
  });

  // Setup Intercom
  createPage({
    path: "/setup-intercom",
    component: path.resolve("./src/pages/User/Setup/Setup.js")
  });

  // Setup Slack
  createPage({
    path: "/connect-slack",
    component: path.resolve("./src/pages/User/Setup/Setup.js")
  });

  // Request user data
  createPage({
    path: "/request-user-data",
    component: path.resolve("./src/pages/User/Request/Request.js")
  });

  // Oauth
  createPage({
    path: "/oauth",
    component: path.resolve("./src/pages/User/Oauth/Oauth.js")
  });

  // Signup
  createPage({
    path: "/signup",
    component: path.resolve("./src/pages/User/Signup/Signup.js")
  });

  // Forgot password
  createPage({
    path: "/forgot-password",
    component: path.resolve("./src/pages/User/Forgot/Forgot.js")
  });

  // Privacy Policy
  createPage({
    path: "/privacy-policy",
    component: path.resolve("./src/pages/Privacy/Privacy.js")
  });

  // Cookies Policy
  createPage({
    path: "/cookies-policy",
    component: path.resolve("./src/pages/Cookies/Cookies.js")
  });

  // Terms
  createPage({
    path: "/terms",
    component: path.resolve("./src/pages/Terms/Terms.js")
  });

  // Posts and pages from markdown
  const result = await graphql(`
    {
      allSanityIntegration {
        edges {
          node {
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
