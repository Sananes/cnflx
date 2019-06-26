import React from "react";
import Layout from "../../components/Layout";
import Page from "../../components/Page";
import Button from "../../components/Button";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./slider.scss";
import styles from "./FlexPricing.module.scss";

// SVGs
import enterpriseSVG from "../../assets/svg/pricing/enterprise.svg";
import enterpriseHoverSVG from "../../assets/svg/pricing/enterprise.svg";
import hobbySVG from "../../assets/svg/pricing/hobby.svg";
import hobbyHoverSVG from "../../assets/svg/pricing/hobby-hover.svg";
import smallBusinessSVG from "../../assets/svg/pricing/small-business.svg";
import smallBusinessHoverSVG from "../../assets/svg/pricing/small-business-hover.svg";
import companySVG from "../../assets/svg/pricing/company.svg";
import companyHoverSVG from "../../assets/svg/pricing/company-hover.svg";

class FlexPricingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      min: 50,
      max: 1000,
      step: 10,
      value: 50,
      price: 10,
      image: hobbySVG,
      tier1: {
        value: 0.2,
        min: 51,
        max: 250
      },
      tier2: {
        value: 0.16,
        min: 251,
        max: 500
      },
      tier3: {
        value: 0.13,
        min: 501,
        max: 1000
      }
    };
  }

  onSliderChange = value => {
    this.setState({ value });
    this.calculatePrice(value);
    this.swapImage(value);
  };

  swapImage = value => {
    if (value < 50 && value <= 125) {
      this.setState({ image: hobbySVG });
    } else if (value > 126 && value <= 250) {
      this.setState({ image: hobbyHoverSVG });
    } else if (value > 251 && value <= 500) {
      this.setState({ image: smallBusinessHoverSVG });
    } else if (value > 501 && value <= 750) {
      this.setState({ image: companyHoverSVG });
    } else if (value > 751 && value <= 1000) {
      this.setState({ image: enterpriseHoverSVG });
    }
  };

  calculatePrice = value => {
    const tier1 = Math.round(200 * this.state.tier1.value + 10);
    const tier2 = Math.round(
      tier1 + (value - this.state.tier2.min) * this.state.tier2.value
    );
    if (value <= this.state.tier1.max) {
      const newPrice = Math.round((value - 50) * this.state.tier1.value + 10);
      this.setState({ price: newPrice });
    } else if (this.state.tier2.min < value && value <= this.state.tier2.max) {
      const newPrice = Math.round(
        (value - 250) * this.state.tier2.value + tier1
      );
      this.setState({ price: newPrice });
    } else if (this.state.tier3.min < value && value <= this.state.tier3.max) {
      const newPrice = Math.round(
        (value - this.state.tier3.min) * this.state.tier3.value + tier2
      );
      this.setState({ price: newPrice });
    } else {
      this.setState({ price: 10 });
    }
  };
  render() {
    const { value, min, max, step, price } = this.state;
    return (
      <Layout className={styles["flex-pricing"]}>
        <Page
          title="Pay as you grow"
          subtitle="Your subscription will be scaled up depending on the usage"
          center={true}
        >
          <div className={styles["flex-pricing__slider"]}>
            <img
              className={styles["flex-pricing__slider-image"]}
              src={this.state.image}
            />
            <Slider
              value={value}
              min={min}
              max={max}
              step={step}
              onChange={this.onSliderChange}
            />
            <div className={styles["flex-pricing__slider-users"]}>
              {value === 1000 ? `${value}+` : value}
              <span> Active end users</span>
            </div>
            <div
              className={
                value != 1000
                  ? `${styles["flex-pricing__slider-price"]}`
                  : `${styles["flex-pricing__slider-price"]} ${
                      styles["flex-pricing__slider-price--contact"]
                    }`
              }
            >
              {value === 1000 ? (
                <a href="mailto:sales@cnflx.io">Contact us</a>
              ) : (
                "€" + price
              )}
              {value != 1000 ? (
                <span> per month</span>
              ) : (
                <span>for pricing</span>
              )}
            </div>
            <div className={styles["flex-pricing__slider-button"]}>
              <a href={"./endusers?=" + value}>Try it free</a>
              <span>14 day free trial. No credit card required.</span>
            </div>
          </div>
        </Page>
      </Layout>
    );
  }
}

export default FlexPricingPage;
