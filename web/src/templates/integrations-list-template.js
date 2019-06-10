// @flow
import React from "react";
import { Link } from "gatsby";
import kebabCase from "lodash/kebabCase";
import Layout from "../components/Layout";
import Page from "../components/Page";
import { useIntegrationList, useSiteMetadata } from "../hooks";

const IntegrationsListTemplate = () => {
  const { title, subtitle } = useSiteMetadata();
  const integrationList = useIntegrationList();

  return (
    <Layout title={`Categories - ${title}`} description={subtitle}>
      <Page title="Categories">
        <ul>
          {integrationList.map(integration => (
            <li>
              <Link
                to={`/integration/${kebabCase(integration.node.slug.current)}/`}
              >
                {integration.node.name}
              </Link>
            </li>
          ))}
        </ul>
      </Page>
    </Layout>
  );
};

export default IntegrationsListTemplate;
