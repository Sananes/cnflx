// @flow
import React from "react";
import { Link } from "gatsby";
import Image from "gatsby-image";
import Icon from "../../components/Icon";
import Layout from "../../components/Layout";
import Page from "../../components/Page";
import styles from "./PricingPage.module.scss";
import { usePricingList, useSiteMetadata } from "../../hooks";

// SVGs
import enterpriseSVG from "../../assets/svg/pricing/enterprise.svg";
import enterpriseHoverSVG from "../../assets/svg/pricing/enterprise.svg";
import hobbySVG from "../../assets/svg/pricing/hobby.svg";
import hobbyHoverSVG from "../../assets/svg/pricing/hobby-hover.svg";
import smallBusinessSVG from "../../assets/svg/pricing/small-business.svg";
import smallBusinessHoverSVG from "../../assets/svg/pricing/small-business-hover.svg";
import companySVG from "../../assets/svg/pricing/company.svg";
import companyHoverSVG from "../../assets/svg/pricing/company-hover.svg";

export const query = graphql`
  query PricingImages {
    pricingAssets: imageSharp(id: { regex: "/pricing/" }) {
      sizes(maxWidth: 600) {
        ...GatsbyImageSharpSizes_tracedSVG
      }
    }
  }
`;

const PricingTemplate = ({ data }) => {
  const { title, subtitle } = useSiteMetadata();
  const pricingList = usePricingList();

  return (
    <Layout className={styles["pricing"]}>
      <Page
        title="Pricing that suits your needs"
        subtitle="Your full stack of collection feedback tools for your current workflow."
        center={true}
      >
        <ul className={styles["pricing__list"]}>
          {pricingList &&
            pricingList.map(price => (
              <li id={price._key} className={styles["pricing__item"]}>
                {price.name === "Hobby" ? (
                  <img
                    className={styles["pricing__item-image"]}
                    src={hobbyHoverSVG}
                  />
                ) : (
                  ""
                )}
                {price.name === "Small Business" ? (
                  <img
                    className={styles["pricing__item-image"]}
                    src={smallBusinessHoverSVG}
                  />
                ) : (
                  ""
                )}
                {price.name === "Company" ? (
                  <img
                    className={styles["pricing__item-image"]}
                    src={companyHoverSVG}
                  />
                ) : (
                  ""
                )}
                {price.name === "Enterprise" ? (
                  <img
                    className={styles["pricing__item-image"]}
                    src={enterpriseHoverSVG}
                  />
                ) : (
                  ""
                )}
                {price.name && (
                  <h3 className={styles["pricing__item-title"]}>
                    {price.name}
                  </h3>
                )}
                <div className={styles["pricing__item-price"]}>
                  <span className={styles["pricing__item-price-currency"]}>
                    $
                  </span>
                  <h4 className={styles["pricing__item-price-title"]}>
                    {price.price}
                  </h4>
                  <span className={styles["pricing__item-price-date"]}>
                    /mo
                  </span>
                </div>
                <p className={styles["pricing__item-subtitle"]}>
                  {price.description}
                </p>
                <ul className={styles["pricing__item-features"]}>
                  <li className={styles["pricing__item-features-item"]}>
                    <Icon
                      name="checkmark"
                      className={styles["pricing__item-checkmark"]}
                    />{" "}
                    Up to {price.endusers} End Users
                  </li>
                  <li className={styles["pricing__item-features-item"]}>
                    <Icon
                      name="checkmark"
                      className={styles["pricing__item-checkmark"]}
                    />{" "}
                    Feedback Translation
                  </li>
                  <li className={styles["pricing__item-features-item"]}>
                    <Icon
                      name="checkmark"
                      className={styles["pricing__item-checkmark"]}
                    />{" "}
                    Emotion Analysis
                  </li>
                  <li className={styles["pricing__item-features-item"]}>
                    <Icon
                      name="checkmark"
                      className={styles["pricing__item-checkmark"]}
                    />{" "}
                    Custom Domain
                  </li>
                </ul>
                <div className={styles["pricing__item-button-wrapper"]}>
                  <Link className={styles["pricing__item-button"]} to="/">
                    Get Started
                  </Link>
                </div>
              </li>
            ))}
        </ul>
      </Page>
    </Layout>
  );
};

export default PricingTemplate;
