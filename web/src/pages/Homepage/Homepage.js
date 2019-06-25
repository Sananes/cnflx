// @flow
import React from "react";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import Layout from "../../components/Layout";
import Signup from "../../components/Signup";
import { useSiteMetadata } from "../../hooks";
import heroSVG from "../../assets/svg/hero.svg";
import collectSVG from "../../assets/svg/collect-feedback.svg";
import communicateSVG from "../../assets/svg/communicate.svg";
import organiseSVG from "../../assets/svg/organise-feedback.svg";
import styles from "./Homepage.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const query = graphql`
  {
    sanityHomepage {
      partnersList {
        name
        _key
        url
        image {
          asset {
            url
          }
        }
      }
      testimonialList {
        name
        role
        _key
        description
        image {
          asset {
            url
          }
        }
      }
    }
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
  var settings = {
    dots: true,
    infinite: false,
    fade: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
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
            <h2 className={styles["testimonials__title"]}>
              What our customers are saying
            </h2>

            <Slider {...settings} className={styles["testimonials__list"]}>
              {data.sanityHomepage.testimonialList.map(testimonial => (
                <div
                  key={testimonial._key}
                  className={styles["testimonials__list-item"]}
                >
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
                </div>
              ))}
            </Slider>
          </div>
        </section>

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
