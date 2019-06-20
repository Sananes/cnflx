// @flow
import React from "react";
import { Link } from "gatsby";
import Icon from "../../components/Icon";
import Layout from "../../components/Layout";
import Button from "../../components/Button";
import Page from "../../components/Page";
import Switch from "../../components/Switch";
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

const PricingTemplate = ({ data }) => {
  const { title, subtitle } = useSiteMetadata();
  const pricingList = usePricingList();

  return (
    <Layout title={`Pricing - ${title}`} description={subtitle}>
      <Page
        title="Pricing that suits your needs"
        subtitle="
        Conflux is perfect for individuals and teams of all sizes. Start for free."
        center={true}
      >
        <div className={styles["pricing__toggle"]}>
          <span
            className={`${styles["pricing__toggle-label"]} ${
              styles["pricing__toggle-label--month"]
            }`}
          >
            Monthly
          </span>
          <Switch />
          <span
            className={`${styles["pricing__toggle-label"]} ${
              styles["pricing__toggle-label--year"]
            }`}
          >
            Anually
          </span>
        </div>

        {/* <Signup className={styles["pricing__signup"]} /> */}
        <div className={styles["pricing__wrapper"]}>
          <div className={styles["pricing__pattern"]} />
          <ul className={styles["pricing__list"]}>
            {pricingList &&
              pricingList.map(price => (
                <li key={price._key} className={styles["pricing__item"]}>
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
                    <Button
                      text="Try it Free"
                      className={styles["pricing__item-button"]}
                      to="/"
                    />
                  </div>
                </li>
              ))}
          </ul>
        </div>

        <section className={styles["custom-pricing"]}>
          <div className={styles["custom-pricing__heading"]}>
            <h3 className={styles["custom-pricing__title"]}>
              Expecting more than 1000 Active End Users?
            </h3>
            <p className={styles["custom-pricing__subtitle"]}>
              We provide volume discounts for enterprise teams. Contact us to
              learn more.
            </p>
          </div>
          <Link to="#" className={styles["custom-pricing__button"]}>
            Contact us
          </Link>
        </section>

        <section className={styles["faq"]}>
          <h3 className={styles["faq__title"]}>Frequently Asked Questions</h3>
          <ul className={styles["faq__list"]}>
            <li className={styles["faq__item"]}>
              <h4 className={styles["faq__item-title"]}>
                What are Active End Users?
              </h4>
              <p className={styles["faq__item-body"]}>
                Active End Users are people that provide you with feedback. As
                soon as they do, we flag them as active for the coming 3 months.
                In case this person does not provide you with additional
                feedback during these 3 months, the users gets flagged as
                inactive. Inactive users will not be counted towards your
                billable quota. This results in a bill that doesn't just
                increase month over month.
              </p>
            </li>
            <li className={styles["faq__item"]}>
              <h4 className={styles["faq__item-title"]}>
                Can I always cancel my subscription?
              </h4>
              <p className={styles["faq__item-body"]}>
                We offer a 60-day money back guarantee. If you cancel your
                account afterwards we'll cancel your account at the end of your
                billing term.
              </p>
            </li>
            <li className={styles["faq__item"]}>
              <h4 className={styles["faq__item-title"]}>
                Do you offer Non-profit or Educational Discount?
              </h4>
              <p className={styles["faq__item-body"]}>
                Yes! We'd love to support you in doing things that make the
                world a better place. We offer a special discount to qualified
                nonprofit organizations and educational institutions. Contact us
                to learn more.
              </p>
            </li>
          </ul>
        </section>
      </Page>
    </Layout>
  );
};

export default PricingTemplate;
