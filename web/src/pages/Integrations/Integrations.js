// @flow
import React from "react";
import { Link, graphql } from "gatsby";
import kebabCase from "lodash/kebabCase";
import Image from "gatsby-image";
import Layout from "../../components/Layout";
import Page from "../../components/Page";
import styles from "./Integrations.module.scss";
import { useIntegrationList, useSiteMetadata } from "../../hooks";

export const query = graphql`
  query {
    sanitySiteIntegration {
      title
      subtitle
    }
  }
`;

const IntegrationsListTemplate = ({ data }: Props) => {
  const { title, subtitle } = useSiteMetadata();
  const integrationList = useIntegrationList();
  const integrationPage = data.sanitySiteIntegration;
  return (
    <Layout
      title={`Integrations - ${title}`}
      description={subtitle}
      className={styles["integrations"]}
    >
      <Page
        title={integrationPage.title}
        subtitle={integrationPage.subtitle}
        className={styles["integrations__inner"]}
        center={true}
      >
        <ul className={styles["integrations__list"]}>
          {integrationList.map(integration => (
            <li
              key={integration.node._key}
              className={styles["integrations__list-item"]}
            >
              <Link
                to={`/integration/${kebabCase(integration.node.slug.current)}/`}
                className={
                  styles["integrations__list-item-link"] +
                  " " +
                  integration.node.slug.current
                }
              >
                <img
                  className={styles["integrations__list-item-image"]}
                  src={integration.node.image.asset.url}
                />
                <h3 className={styles["integrations__list-item-title"]}>
                  {integration.node.name}
                </h3>
              </Link>
            </li>
          ))}
        </ul>
      </Page>
    </Layout>
  );
};

export default IntegrationsListTemplate;
