// @flow
import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import Layout from "../../components/Layout";
import Signup from "../../components/Signup";
import Testimonials from "./Testimonials/Testimonials";
import Partners from "./Partners/Partners";
import { useSiteMetadata } from "../../hooks";
import collectSVG from "../../assets/svg/collect-feedback.svg";
import communicateSVG from "../../assets/svg/communicate.svg";
import organiseSVG from "../../assets/svg/organise-feedback.svg";
import styles from "./Homepage.module.scss";

export const query = graphql`
  {
    heroImage: file(relativePath: { eq: "hero.png" }) {
      childImageSharp {
        fluid(maxWidth: 4000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`;

const IndexTemplate = ({ data }) => {
  const { title: siteTitle, subtitle: siteSubtitle } = useSiteMetadata();
  // const { partnerList } = data.sanityHomepage._rawPartnersList;
  // const { testimonialList } = data.sanityHomepage._rawTestimonialList;

  return (
    <Layout title={siteTitle} description={siteSubtitle}>
      <div className={styles["wrapper"]}>
        <section className={styles["hero"]}>
          <div className={styles["hero__inner"]}>
            <h1 className={styles["hero__title"]}>
              All-in-one feedback management
            </h1>
            <p className={styles["hero__subtitle"]}>{siteSubtitle}</p>
            <Signup className={styles["hero__signup"]} />
            <div className={styles["hero__image-wrapper"]}>
              <div className={styles["hero__pattern"]} />
              <Img
                className={styles["hero__image"]}
                fluid={data.heroImage.childImageSharp.fluid}
              />
            </div>
          </div>
        </section>

        <Partners />

        <section className={styles["features"]}>
          <div className={styles["features__inner"]}>
            <h2 className={styles["features__title"]}>
              Next generation feedback management
            </h2>
            <p className={styles["features__subtitle"]}>
              Listen to your supporters and help them achieve greatness with the
              use of your product
            </p>

            <ul className={styles["features__list"]}>
              <div className={styles["features__plane-right"]} />
              <div className={styles["features__plane-left"]} />
              <li className={styles["features__list-item"]}>
                <img
                  className={styles["features__list-image"]}
                  src={collectSVG}
                />
                <h3 className={styles["features__list-title"]}>
                  Collecting feedback
                </h3>
                <p className={styles["features__list-body"]}>
                  Conflux integrates with popular channels to make it easy to
                  collect feedback you're already receiving.{" "}
                </p>
              </li>
              <div className={styles["features__list-split"]}>
                <li className={styles["features__list-item"]}>
                  <img
                    className={styles["features__list-image"]}
                    src={communicateSVG}
                  />
                  <h3 className={styles["features__list-title"]}>
                    Communicate with your users
                  </h3>
                  <p className={styles["features__list-body"]}>
                    To complete the cycle and get more feedback, Conflux allows
                    you to mass update your Users, and even allows you to engage
                    in one-on-one conversations.
                  </p>
                </li>
                <li className={styles["features__list-item"]}>
                  <img
                    className={styles["features__list-image"]}
                    src={organiseSVG}
                  />
                  <h3 className={styles["features__list-title"]}>
                    Organise Feedback
                  </h3>
                  <p className={styles["features__list-body"]}>
                    Utilising the latest tech, Conflux has the features to
                    easily organise all the feedback you're receiving. Create
                    custom views to easily find what's important.
                  </p>
                </li>
              </div>
            </ul>
          </div>
        </section>

        <Testimonials />

        <section className={styles["signup"]}>
          <div className={styles["signup__inner"]}>
            <h3 className={styles["signup__title"]}>Start managing feedback</h3>
            <p className={styles["signup__subtitle"]}>
              Free 14 day trial · No credit card&nbsp;required
            </p>
            <Signup
              notice="No credit card required."
              className={styles["signup__wrapper"]}
            />
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default IndexTemplate;
