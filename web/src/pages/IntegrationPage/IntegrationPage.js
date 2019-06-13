// @flow
import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import styles from "./IntegrationPage.module.scss";
import Layout from "../../components/Layout";
import Icon from "../../components/Icon";
import Svg from "../../components/Svg";
import Page from "../../components/Page";
import { useSiteMetadata } from "../../hooks";

export const query = graphql`
  query($slug: String) {
    sanityIntegration(slug: { current: { eq: $slug } }) {
      name
      description
      image {
        asset {
          url
        }
      }
      slug {
        current
      }
    }
  }
`;

const IntegrationTemplate = ({ data }: Props) => {
  const { title: siteTitle, subtitle: siteSubtitle } = useSiteMetadata();

  return (
    <Layout title={siteTitle} description={siteSubtitle}>
      <Page>
        <div className={styles["integration__wrapper"]}>
          <div className={styles["integration__connect"]}>
            <img
              className={styles["integration__company-logo"]}
              src={data.sanityIntegration.image.asset.url}
            />
            <Icon
              name="plus"
              fill="none"
              className={styles["integration__plus"]}
            />
            <Svg className={styles["integration__logo"]} name="logominimal" />
          </div>
          <h1 className={styles["integration__title"]}>
            Conflux for {data.sanityIntegration.name}
          </h1>
          <p className={styles["integration__description"]}>
            {data.sanityIntegration.description}
          </p>
          <button className={styles["integration__button"]}>Connect</button>
        </div>
      </Page>
    </Layout>
  );
};

export default IntegrationTemplate;
