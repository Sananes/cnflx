import React from "react";
import { StaticQuery, graphql } from "gatsby";
import styles from "./Testimonials.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./react-slick.scss";

const settings = {
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

const IndexTestimonials = () => (
  <StaticQuery
    query={graphql`
      query IndexTestimonialsQuery {
        sanityHomepage {
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
      }
    `}
    render={data => (
      <section className={styles["testimonials"]}>
        <div className={styles["testimonials__inner"]}>
          <h2 className={styles["testimonials__title"]}>
            What our customers are saying
          </h2>

          <Slider {...settings} className={styles["testimonials__list"]}>
            {data.sanityHomepage.testimonialList.length &&
              data.sanityHomepage.testimonialList.map(testimonial => (
                <div
                  key={testimonial._key}
                  className={styles["testimonials__list-item"]}
                >
                  <blockquote>{testimonial.description}</blockquote>
                  <div className={styles["testimonials__list-item-company"]}>
                    <img
                      alt={testimonial.name}
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
    )}
  />
);

export default IndexTestimonials;
