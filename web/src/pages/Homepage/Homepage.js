// @flow
import React, { useState } from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import Layout from "../../components/Layout";
import Signup from "../../components/Signup";
import Testimonials from "./Testimonials/Testimonials";
import Integrations from "./Integrations/Integrations";
import Partners from "./Partners/Partners";
import birdMascot from "../../assets/svg/bird-mascot.svg";
import collectSVG from "../../assets/svg/collect-feedback.svg";
import communicateSVG from "../../assets/svg/communicate.svg";
import organiseSVG from "../../assets/svg/organise-feedback.svg";
import catSVG from "../../assets/svg/cat-mascot.svg";
import slackCard from "../../assets/svg/slack-card.svg";
import twitterCard from "../../assets/svg/twitter-card.svg";
import jiraCard from "../../assets/svg/jira-card.svg";
import intercomCard from "../../assets/svg/intercom-card.svg";
import { useSiteMetadata } from "../../hooks";
import styles from "./Homepage.module.scss";

export const query = graphql`
  {
    heroImage: file(relativePath: { eq: "hero-app.png" }) {
      childImageSharp {
        fluid(maxWidth: 4000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`;

const IndexTemplate = ({ data }) => {
  const { title, subtitle, name } = useSiteMetadata();
  const [heroAnimation, setHeroAnimation] = useState(false);
  const animate = heroAnimation
    ? styles["hero-animate"]
    : styles["hero-no-animate"];

  return (
    <Layout
      title={`${title} | ${name}`}
      description={subtitle}
      className={styles["home"]}
    >
      <div className={styles["wrapper"]}>
        <section className={styles["hero"]}>
          <div className={styles["hero__inner"]}>
            {/* <h1 className={styles["hero__title"]}>
              All-in-one feedback management
            </h1>
             <p className={styles["hero__subtitle"]}>{subtitle}</p> */}
            <div className={styles["intro-wrapper"]}>
              <h1 className={styles["hero__title"]}>All-in-one feedback</h1>
              <div className={styles["hero__subtitle-wrapper"]}>
                <p className={styles["hero__subtitle"]}>
                  <span className={styles["prioritise"]}>Prioritise</span>,{" "}
                  <span className={styles["manage"]}>manage</span> and
                  <span className={styles["track"]}>track</span> your customer
                  feedback with Conflux.
                </p>
                <img
                  className={styles["hero__bird"]}
                  src={birdMascot}
                  alt="Conflux bird"
                />
                <Signup className={styles["hero__signup"]} />
              </div>
            </div>
            <div className={`${styles["hero__image-wrapper"]} ${animate}`}>
              <div className={styles["hero__pattern"]} />
              <img src={catSVG} alt="Cat" className={styles["hero-cat"]} />

              <ul>
                <img
                  src={slackCard}
                  alt="Slack"
                  className={`${styles["hero-card"]} ${
                    styles["hero-card-slack"]
                  }`}
                />
                <img
                  src={twitterCard}
                  alt="Twitter"
                  className={`${styles["hero-card"]} ${
                    styles["hero-card-twitter"]
                  }`}
                />
                <img
                  src={jiraCard}
                  alt="JIRA"
                  className={`${styles["hero-card"]} ${
                    styles["hero-card-jira"]
                  }`}
                />
                <img
                  src={intercomCard}
                  alt="Intercom"
                  className={`${styles["hero-card"]} ${
                    styles["hero-card-intercom"]
                  }`}
                />
              </ul>
              <Img
                className={styles["hero-app"]}
                alt="All-in-one feedback managment"
                onLoad={() => setHeroAnimation(!heroAnimation)}
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
                  alt="Collecting feedback"
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
                    alt="Communicate with your users"
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
                    alt="Organise Feedback"
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

        <Integrations />

        <Testimonials />
      </div>
    </Layout>
  );
};

export default IndexTemplate;
