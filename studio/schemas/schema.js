// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";
import packages from "./package";
import siteSettings from "./documents/siteSettings";
import blockContent from "./documents/blockContent";
import pricing from "./documents/pricing";
import testimonial from "./documents/testimonial";
import integrationPage from "./documents/integrationPage";
import integration from "./documents/integration";
import partner from "./documents/partner";

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
    partner,
    testimonial,
    packages,
    pricing,
    integration,
    integrationPage
  ])
});
