// @flow
import React from "react";
import { graphql } from "gatsby";
import Image from "gatsby-image";
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
          fluid(maxWidth: 1000) {
            ...GatsbySanityImageFluid_noBase64
          }
        }
      }
      slug {
        current
      }
      link
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
            <Image
              className={styles["integration__company-logo"]}
              fluid={data.sanityIntegration.image.asset.fluid}
              title={data.sanityIntegration.name}
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
          <a
            href={data.sanityIntegration.link}
            className={styles["integration__button"]}
          >
            Connect
          </a>
        </div>
      </Page>
    </Layout>
  );
};

export default IntegrationTemplate;
