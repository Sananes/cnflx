// @flow
import React from "react";
import { Link } from "gatsby";
import kebabCase from "lodash/kebabCase";
import Image from "gatsby-image";
import Layout from "../../components/Layout";
import Header from "../../components/Header";
import Page from "../../components/Page";
import styles from "./Integrations.module.scss";
import { useIntegrationList, useSiteMetadata } from "../../hooks";

const IntegrationsListTemplate = () => {
  const { title, subtitle } = useSiteMetadata();
  const integrationList = useIntegrationList();

  return (
    <Layout className={styles["integrations"]}>
      <Page
        title="Integrate with your workflow"
        subtitle="We've definitely got you covered when it comes to using alternative
        tools for your current workflow."
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
