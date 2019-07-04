// @flow
import React from "react";
import { scroller } from "react-scroll";
import { graphql } from "gatsby";
import Image from "gatsby-image";
import Layout from "../../components/Layout";
import Page from "../../components/Page";
import styles from "./Product.module.scss";
import { useSiteMetadata } from "../../hooks";

// SVGs
import collectSVG from "../../assets/svg/collect-feedback.svg";
import organiseSVG from "../../assets/svg/organise-feedback.svg";
import communicateSVG from "../../assets/svg/communicate.svg";

export const query = graphql`
  {
    collectFeedback: file(
      relativePath: { eq: "product/collect-feedback.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1280) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    organiseFeedback: file(
      relativePath: { eq: "product/organise-feedback.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1280) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    communicate: file(relativePath: { eq: "product/communicate.png" }) {
      childImageSharp {
        fluid(maxWidth: 1280) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    publicDashboard: file(
      relativePath: { eq: "product/public-dashboard.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1280) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    emotionAnalysis: file(
      relativePath: { eq: "product/emotion-analysis.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1280) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    automationRules: file(
      relativePath: { eq: "product/automation-rules.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1280) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    attachFeedback: file(relativePath: { eq: "product/attach-feedback.png" }) {
      childImageSharp {
        fluid(maxWidth: 1280) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    automaticTranslation: file(
      relativePath: { eq: "product/automatic-translation.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1280) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    notificationDigest: file(
      relativePath: { eq: "product/notification-digest.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1280) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    filters: file(relativePath: { eq: "product/filters.png" }) {
      childImageSharp {
        fluid(maxWidth: 1280) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    oneOnOne: file(relativePath: { eq: "product/1-1-communication.png" }) {
      childImageSharp {
        fluid(maxWidth: 1280) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    statusUpdate: file(relativePath: { eq: "product/status-updates.png" }) {
      childImageSharp {
        fluid(maxWidth: 1280) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`;

const ProductPage = ({ data }) => {
  const { name } = useSiteMetadata();

  function scrollTo(e) {
    scroller.scrollTo(e, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart"
    });
  }
  return (
    <Layout
      title={`Product | ${name}`}
      description="Streamline your feedback, from anywhere, anytime."
      className={styles["product"]}
    >
      <Page
        title="Next-generation feedback management platform"
        narrow={true}
        center={true}
      >
        <section>
          <ul className={styles["product__navigation-list"]}>
            <li className={styles["product__navigation-list-item"]}>
              <a
                onClick={() => scrollTo("collect")}
                className={styles["product__navigation-link"]}
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
              </a>
            </li>
            <li className={styles["product__navigation-list-item"]}>
              <a
                className={styles["product__navigation-link"]}
                onClick={() => scrollTo("organise")}
              >
                <div className={styles["product__navigation-image-wrapper"]}>
                  <img
                    className={styles["product__navigation-image"]}
                    src={organiseSVG}
                    alt="Organise Feedback"
                  />
                </div>
                <h4 className={styles["product__navigation-title"]}>
                  Organise
                </h4>
                <p className={styles["product__navigation-subtitle"]}>
                  Easily find what's important
                </p>
              </a>
            </li>
            <li className={styles["product__navigation-list-item"]}>
              <a
                className={styles["product__navigation-link"]}
                onClick={() => scrollTo("communicate")}
              >
                <div className={styles["product__navigation-image-wrapper"]}>
                  <img
                    className={styles["product__navigation-image"]}
                    src={communicateSVG}
                    alt="Communicate Feedback"
                  />
                </div>
                <h4 className={styles["product__navigation-title"]}>
                  Communicate
                </h4>
                <p className={styles["product__navigation-subtitle"]}>
                  Complete the cycle
                </p>
              </a>
            </li>
          </ul>
        </section>

        <section id="collect" className={styles["product__feature"]}>
          <div className={styles["product__feature-headline"]}>
            <h2 className={styles["product__feature-headline-title"]}>
              Collect your feedback
            </h2>
            <p className={styles["product__feature-headline-subtitle"]}>
              Collecting feedback is critical for the maturation of your
              product. Stay ahead of the competition by listening to what your
              Users really want.
            </p>
          </div>
          <div className={`${styles["product__feature-item"]}`}>
            <div className={styles["product__feature-item-image-wrapper"]}>
              <Image
                className={styles["product__feature-item-image"]}
                fluid={data.publicDashboard.childImageSharp.fluid}
                title="Public Dashboard"
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
              {data.emotionAnalysis.childImageSharp.fluid ? (
                <Image
                  className={styles["product__feature-item-image"]}
                  fluid={data.emotionAnalysis.childImageSharp.fluid}
                  title="Emotion Analysis"
                />
              ) : null}
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
              <Image
                className={styles["product__feature-item-image"]}
                fluid={data.automaticTranslation.childImageSharp.fluid}
                title="Automatic Translation"
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

        <section id="organise" className={styles["product__feature"]}>
          <div className={styles["product__feature-headline"]}>
            <h2 className={styles["product__feature-headline-title"]}>
              Organise your feedback
            </h2>
            <p className={styles["product__feature-headline-subtitle"]}>
              Create a workflow that works for you. They say preparation is half
              the work. Conflux allows you to organise your feedback and ideas
              in a way that makes it fast to do the things you need to do.
            </p>
          </div>
          <div className={`${styles["product__feature-item"]}`}>
            <div className={styles["product__feature-item-image-wrapper"]}>
              <Image
                className={styles["product__feature-item-image"]}
                fluid={data.filters.childImageSharp.fluid}
                title="Filters"
              />
            </div>
            <div className={styles["product__feature-item-content"]}>
              <h2 className={styles["product__feature-item-title"]}>Filters</h2>
              <p className={styles["product__feature-item-body"]}>
                Create custom filters to gain quick insights, view all the
                feedback that matches a certain sentiment score, focus on the
                highest quality feedback or create a new filter for your
                upcoming idea. We make it all possible.
              </p>
            </div>
          </div>
          <div
            className={`${styles["product__feature-item"]} ${
              styles["product__feature-item--right"]
            }`}
          >
            <div className={styles["product__feature-item-image-wrapper"]}>
              <Image
                className={styles["product__feature-item-image"]}
                fluid={data.automationRules.childImageSharp.fluid}
                title="Automation Rules"
              />
            </div>
            <div className={styles["product__feature-item-content"]}>
              <h2 className={styles["product__feature-item-title"]}>
                Automation Rules
              </h2>
              <p className={styles["product__feature-item-body"]}>
                Once feedback starts dripping in continuously it might be easy
                to get some things done automatically. Any feedback that comes
                in first goes through your automation rules, apply tags based on
                what the feedback is about and off it goes!
              </p>
            </div>
          </div>
          <div className={`${styles["product__feature-item"]}`}>
            <div className={styles["product__feature-item-image-wrapper"]}>
              <Image
                className={styles["product__feature-item-image"]}
                fluid={data.attachFeedback.childImageSharp.fluid}
                title="Attach feedback to ideas"
              />
            </div>
            <div className={styles["product__feature-item-content"]}>
              <h2 className={styles["product__feature-item-title"]}>
                Attach feedback to ideas
              </h2>
              <p className={styles["product__feature-item-body"]}>
                You are in charge of your ideas, but that doesn't mean you can't
                use your user's feedback to fuel those ideas. Attach feedback
                from your users to your existing ideas (or create a new one!) to
                group your users together and inform them about progress on your
                ideas.
              </p>
            </div>
          </div>
        </section>

        <section id="communicate" className={styles["product__feature"]}>
          <div className={styles["product__feature-headline"]}>
            <h2 className={styles["product__feature-headline-title"]}>
              Communicate with your users
            </h2>
            <p className={styles["product__feature-headline-subtitle"]}>
              This is where most of the magic happens. Your supporters are
              ambassadors of your product. Show them you're listening by
              communicating updates on ideas that matter most to them.
            </p>
          </div>
          <div className={`${styles["product__feature-item"]}`}>
            <div className={styles["product__feature-item-image-wrapper"]}>
              <Image
                className={styles["product__feature-item-image"]}
                fluid={data.notificationDigest.childImageSharp.fluid}
                title="Notifications &amp; Digests"
              />
            </div>
            <div className={styles["product__feature-item-content"]}>
              <h2 className={styles["product__feature-item-title"]}>
                Notifications &amp; Digests
              </h2>
              <p className={styles["product__feature-item-body"]}>
                Conflux integrates with Slack for notifications about feedback
                and ideas. If you don't have Slack, we can also update you
                through e-mail with our digest feature. Digests can also be used
                to keep your stakeholders up to date as it shows a weekly (or
                daily) overview on what's been going on.
              </p>
            </div>
          </div>
          <div
            className={`${styles["product__feature-item"]} ${
              styles["product__feature-item--right"]
            }`}
          >
            <div className={styles["product__feature-item-image-wrapper"]}>
              <Image
                className={styles["product__feature-item-image"]}
                fluid={data.oneOnOne.childImageSharp.fluid}
                title="1-on-1 Communication"
              />
            </div>
            <div className={styles["product__feature-item-content"]}>
              <h2 className={styles["product__feature-item-title"]}>
                1-on-1 Communication
              </h2>
              <p className={styles["product__feature-item-body"]}>
                Sometimes you need some more information from your user, luckily
                you can do all that from within Conflux. Conflux allows you to
                communicate 1-on-1 with your users via e-mail. This means you
                never have to switch back and forth between apps.
              </p>
            </div>
          </div>
          <div
            className={`${styles["product__feature-item"]} ${
              styles["product__feature-item--last-child"]
            }`}
          >
            <div className={styles["product__feature-item-image-wrapper"]}>
              <Image
                className={styles["product__feature-item-image"]}
                fluid={data.statusUpdate.childImageSharp.fluid}
                title="Status updates"
              />
            </div>
            <div className={styles["product__feature-item-content"]}>
              <h2 className={styles["product__feature-item-title"]}>
                Status updates
              </h2>
              <p className={styles["product__feature-item-body"]}>
                Through Status Updates you can keep your users in the loop about
                changes to an idea. Has something been accepted and entered
                development? Let them know! Feature complete? Let your users
                know!
              </p>
            </div>
          </div>
        </section>
      </Page>
    </Layout>
  );
};

export default ProductPage;
