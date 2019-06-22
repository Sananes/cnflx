// @flow
import React from "react";
import { Link, graphql } from "gatsby";
import Icon from "../../components/Icon";
import Svg from "../../components/Svg";
import Layout from "../../components/Layout";
import Button from "../../components/Button";
import Page from "../../components/Page";
import Switch from "../../components/Switch";
import styles from "./PricingPage.module.scss";

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
  {
    sanityPricing {
      _rawPackage(resolveReferences: { maxDepth: 6 })
      _rawFaqs(resolveReferences: { maxDepth: 6 })
    }
  }
`;

class PricingTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showPrice: false };
  }

  togglePrice = () => {
    this.setState({
      showPrice: !this.state.showPrice
    });
  };

  render() {
    const { data } = this.props;
    const pricingList = data.sanityPricing._rawPackage;
    const faqs = data.sanityPricing._rawFaqs;
    const annualPrice = this.state.showPrice;

    return (
      <Layout title={`Pricing`}>
        <Page
          title="Pricing that suits your needs"
          subtitle="
        Conflux is perfect for individuals and teams of all sizes. Start for free."
          center={true}
        >
          <div className={styles["pricing__toggle"]}>
            <div className={styles["pricing__toggle-discount"]}>
              Save up to 10% annualy
              <Svg
                name="pricingArrow"
                className={styles["pricing__toggle-arrow"]}
              />
            </div>
            <span
              className={`${styles["pricing__toggle-label"]} ${
                styles["pricing__toggle-label--month"]
              }`}
            >
              Monthly
            </span>
            <Switch toggle={this.togglePrice} />
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
                    <div className={styles["pricing__item-top-wrapper"]}>
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
                        <span
                          className={styles["pricing__item-price-currency"]}
                        >
                          $
                        </span>
                        <h4 className={styles["pricing__item-price-title"]}>
                          {annualPrice
                            ? Math.round((price.price * 12 * 0.9) / 12)
                            : price.price}
                        </h4>
                        <span className={styles["pricing__item-price-date"]}>
                          per <br /> month
                        </span>
                      </div>
                      <p className={styles["pricing__item-subtitle"]}>
                        {price.description}
                      </p>
                    </div>
                    <div className={styles["pricing__item-wrapper"]}>
                      <ul className={styles["pricing__item-features"]}>
                        <li className={styles["pricing__item-features-item"]}>
                          <Icon
                            name="checkmark"
                            className={styles["pricing__item-checkmark"]}
                          />{" "}
                          Up to {price.endusers} End Users
                        </li>
                      </ul>
                      <div className={styles["pricing__item-button-wrapper"]}>
                        <Button
                          text="Try it Free"
                          className={styles["pricing__item-button"]}
                          to="/"
                        />
                      </div>
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
              {faqs &&
                faqs.map(faq => (
                  <li className={styles["faq__item"]}>
                    <h4 className={styles["faq__item-title"]}>
                      {faq.title && faq.title}
                    </h4>
                    <p className={styles["faq__item-body"]}>
                      {faq.description && faq.description}
                    </p>
                  </li>
                ))}
            </ul>
          </section>
        </Page>
      </Layout>
    );
  }
}

export default PricingTemplate;
