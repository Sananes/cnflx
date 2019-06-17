// @flow
import React from "react";
import { Link } from "gatsby";
import Image from "gatsby-image";
import Icon from "../../components/Icon";
import Layout from "../../components/Layout";
import Page from "../../components/Page";
import styles from "./Product.module.scss";
import { useSiteMetadata } from "../../hooks";

// SVGs
import collectSVG from "../../assets/svg/collect-feedback.svg";
import organiseSVG from "../../assets/svg/organise-feedback.svg";
import communicateSVG from "../../assets/svg/communicate.svg";

import publicDashboardSVG from "../../assets/svg/product/public-dashboard.svg";

import emotionAnalysisSVG from "../../assets/svg/product/emotion-analysis.svg";

import automaticTranslationSVG from "../../assets/svg/product/automatic-translation.svg";

const ProductPage = () => {
  const { title, subtitle } = useSiteMetadata();

  return (
    <Layout className={styles["product"]}>
      <Page
        title="Streamline your feedback, from anywhere, anytime."
        narrow={true}
        center={true}
      >
        <section>
          <ul className={styles["product__navigation-list"]}>
            <li className={styles["product__navigation-list-item"]}>
              <Link
                className={styles["product__navigation-link"]}
                to="#product"
              >
                <div className={styles["product__navigation-image-wrapper"]}>
                  <img
                    className={styles["product__navigation-image"]}
                    src={collectSVG}
                    alt="Collect Feedback"
                  />
                </div>
                <h4 className={styles["product__navigation-title"]}>Collect</h4>
                <p className={styles["product__navigation-subtitle"]}>
                  Manually or through integrations
                </p>
              </Link>
            </li>
            <li className={styles["product__navigation-list-item"]}>
              <Link
                className={styles["product__navigation-link"]}
                to="#product"
              >
                <div className={styles["product__navigation-image-wrapper"]}>
                  <img
                    className={styles["product__navigation-image"]}
                    src={organiseSVG}
                    alt="Collect Feedback"
                  />
                </div>
                <h4 className={styles["product__navigation-title"]}>
                  Organise
                </h4>
                <p className={styles["product__navigation-subtitle"]}>
                  Easily find what's important
                </p>
              </Link>
            </li>
            <li className={styles["product__navigation-list-item"]}>
              <Link
                className={styles["product__navigation-link"]}
                to="#product"
              >
                <div className={styles["product__navigation-image-wrapper"]}>
                  <img
                    className={styles["product__navigation-image"]}
                    src={communicateSVG}
                    alt="Collect Feedback"
                  />
                </div>
                <h4 className={styles["product__navigation-title"]}>
                  Communicate
                </h4>
                <p className={styles["product__navigation-subtitle"]}>
                  Complete the cycle
                </p>
              </Link>
            </li>
          </ul>
        </section>

        <section className={styles["product__feature"]}>
          <div className={styles["product__feature-headline"]}>
            <h2 className={styles["product__feature-headline-title"]}>
              Collect your feedback
            </h2>
            <p className={styles["product__feature-headline-subtitle"]}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius
              quidem hic facilis asperiores enim, illo eveniet vitae architecto
              quae laboriosam.
            </p>
          </div>
          <div className={`${styles["product__feature-item"]}`}>
            <div className={styles["product__feature-item-image-wrapper"]}>
              <img
                className={styles["product__feature-item-image"]}
                src={publicDashboardSVG}
                alt="Public Dashboard"
              />
            </div>
            <div className={styles["product__feature-item-content"]}>
              <h2 className={styles["product__feature-item-title"]}>
                Public Ideaboard
              </h2>
              <p className={styles["product__feature-item-body"]}>
                Easily find Collecting feedback is critical for the maturation
                of your product. Stay ahead of the competition by listening to
                what your Users really want.what’s important
              </p>
            </div>
          </div>
          <div
            className={`${styles["product__feature-item"]} ${
              styles["product__feature-item--right"]
            }`}
          >
            <div className={styles["product__feature-item-image-wrapper"]}>
              <img
                className={styles["product__feature-item-image"]}
                src={emotionAnalysisSVG}
                alt="Public Dashboard"
              />
            </div>
            <div className={styles["product__feature-item-content"]}>
              <h2 className={styles["product__feature-item-title"]}>
                Emotion Analysis
              </h2>
              <p className={styles["product__feature-item-body"]}>
                All incoming feedback will go through our Emotion Analysis
                Engine, giving you a first insight of the feedback. Easily
                address customers that are having a negative experience so they
                can see you're worth paying for.
              </p>
            </div>
          </div>
          <div className={`${styles["product__feature-item"]}`}>
            <div className={styles["product__feature-item-image-wrapper"]}>
              <img
                className={styles["product__feature-item-image"]}
                src={automaticTranslationSVG}
                alt="Public Dashboard"
              />
            </div>
            <div className={styles["product__feature-item-content"]}>
              <h2 className={styles["product__feature-item-title"]}>
                Automatic Translation
              </h2>
              <p className={styles["product__feature-item-body"]}>
                It doesn't matter what language your customers speak. Our
                automatic translation engine, will make sure you'll understand.
              </p>
            </div>
          </div>
        </section>
      </Page>
    </Layout>
  );
};

export default ProductPage;
