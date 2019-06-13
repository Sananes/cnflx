// @flow
import React from "react";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import Layout from "../../components/Layout";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Svg from "../../components/Svg";
import { useSiteMetadata } from "../../hooks";
import heroSVG from "../../assets/svg/hero.svg";
import collectSVG from "../../assets/svg/collect-feedback.svg";
import communicateSVG from "../../assets/svg/communicate.svg";
import organiseSVG from "../../assets/svg/organise-feedback.svg";
import confluxSVG from "../../assets/svg/conflux-logo.svg";
import styles from "./Homepage.module.scss";

export const query = graphql`
  {
    sanityHomepage {
      partnersList {
        name
        image {
          asset {
            url
          }
        }
      }
      testimonialList {
        name
        role
        description
        image {
          asset {
            url
          }
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
    <Layout>
      <div className={styles["wrapper"]}>
        <section className={styles["hero"]}>
          <div className={styles["hero__inner"]}>
            <h1 className={styles["hero__title"]}>
              All-in-one feedback management
            </h1>
            <p className={styles["hero__subtitle"]}>{siteSubtitle}</p>
            <div className={styles["hero__signup"]}>
              <div className={styles["hero__signup_wrapper"]}>
                <input
                  className={styles["hero__signup_input"]}
                  placeholder="Company name"
                />
                <span className={styles["hero__signup_prefix"]}>.cnflx.io</span>
              </div>
              <button className={styles["hero__signup_button"]}>
                Get Started
              </button>
              {/* TODO: sign up free trial notice */}
            </div>
            <div className={styles["hero__image-wrapper"]}>
              <div className={styles["hero__pattern"]} />
              <img className={styles["hero__image"]} src={heroSVG} />
            </div>
          </div>
        </section>

        <section className={styles["companies"]}>
          <div className={styles["companies__inner"]}>
            <h3 className={styles["companies__title"]}>
              Trusted by forward-thinking software teams around the world
            </h3>
            <ul className={styles["companies__list"]}>
              {data.sanityHomepage.partnersList.map(partner => (
                <li
                  key={partner._key}
                  className={styles["companies__list-item"]}
                >
                  <a
                    className={styles["companies__list-item-link"]}
                    href={partner.url}
                  >
                    <img
                      src={partner.image.asset.url}
                      className={styles["companies__list-item-logo"]}
                    />
                  </a>
                </li>
              ))}
              {/* <li className={styles["companies__list-item"]}>
                <Link className={styles["companies__list-item-link"]} to="#">
                  <Icon icon={getIcon("marvel")} />
                </Link>
              </li>
              <li className={styles["companies__list-item"]}>
                <Link className={styles["companies__list-item-link"]} to="#">
                  <Icon icon={getIcon("stripe")} />
                </Link>
              </li>
              <li className={styles["companies__list-item"]}>
                <Link to="#" className={styles["companies__list-item-link"]}>
                  <Icon icon={getIcon("silverfin")} />
                </Link>
              </li>
              <li className={styles["companies__list-item"]}>
                <Link className={styles["companies__list-item-link"]} to="#">
                  <Icon icon={getIcon("hopper")} />
                </Link>
              </li>
              <li className={styles["companies__list-item"]}>
                <Link className={styles["companies__list-item-link"]} to="#">
                  <Icon icon={getIcon("lightspeed")} />
                </Link>
            </li> */}
            </ul>
          </div>
        </section>

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

        <section className={styles["testimonials"]}>
          <div className={styles["testimonials__inner"]}>
            <h3 className={styles["testimonials__title"]}>
              What others are saying about us
            </h3>

            <ul className={styles["testimonials__list"]}>
              {data.sanityHomepage.testimonialList.map(testimonial => (
                <li className={styles["testimonials__list-item"]}>
                  <blockquote>{testimonial.description}</blockquote>
                  <div className={styles["testimonials__list-item-company"]}>
                    <img
                      className={
                        styles["testimonials__list-item-company-image"]
                      }
                      src={testimonial.image.asset.url}
                    />
                    <div
                      className={
                        styles["testimonials__list-item-company-details"]
                      }
                    >
                      <h6
                        className={
                          styles["testimonials__list-item-company-name"]
                        }
                      >
                        {testimonial.name}
                      </h6>
                      <small>{testimonial.role}</small>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className={styles["signup"]}>
          <div className={styles["signup__inner"]}>
            <h3 className={styles["signup__title"]}>Try it now</h3>
            <p className={styles["signup__subtitle"]}>
              Try it now with a 14 day free trial.
            </p>
            <div className={styles["signup__newsletter"]}>
              <div className={styles["signup__newsletter-wrapper"]}>
                <div className={styles["signup__newsletter-input-wrapper"]}>
                  <input
                    className={styles["signup__newsletter-input"]}
                    placeholder="Company name"
                  />
                  <span className={styles["signup__newsletter-prefix"]}>
                    cnflx.io
                  </span>
                </div>
                <button className={styles["signup__newsletter-button"]}>
                  Get Started
                </button>
              </div>
            </div>
            <p className={styles["signup__notice"]}>Credit card is required.</p>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default IndexTemplate;
