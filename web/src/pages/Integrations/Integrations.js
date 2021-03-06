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
  const { name } = useSiteMetadata();
  const integrationList = useIntegrationList();
  const integrationPage = data.sanitySiteIntegration;
  return (
    <Layout
      title={`Integrations | ${name}`}
      description={integrationPage.subtitle}
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
                <Image
                  className={styles["integrations__list-item-image"]}
                  fluid={integration.node.image.asset.fluid}
                  title={integration.node.name}
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
