// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";
import packages from "./objects/package";
import siteSettings from "./documents/siteSettings";
import test from "./documents/test";
import blockContent from "./documents/blockContent";
import pricing from "./documents/pricing";
import homepage from "./documents/homepage";
import faq from "./objects/faq";
import testimonial from "./objects/testimonial";
import integrationPage from "./documents/integrationPage";
import integration from "./objects/integration";
import partner from "./objects/partner";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    siteSettings,
    blockContent,
    homepage,
    partner,
    test,
    faq,
    testimonial,
    packages,
    pricing,
    integration,
    integrationPage
  ])
});
