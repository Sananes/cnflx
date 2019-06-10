// @flow
import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Feed from "../components/Feed";
import Page from "../components/Page";
import { useSiteMetadata } from "../hooks";

export const query = graphql`
  query($slug: String) {
    sanityIntegration(slug: { current: { eq: $slug } }) {
      name
    }
  }
`;

const IntegrationTemplate = ({ data }: Props) => {
  const { title: siteTitle, subtitle: siteSubtitle } = useSiteMetadata();

  return (
    <Layout title={siteTitle} description={siteSubtitle}>
      <Page>
        <h1>{data.sanityIntegration.name}</h1>
      </Page>
    </Layout>
  );
};

export default IntegrationTemplate;
