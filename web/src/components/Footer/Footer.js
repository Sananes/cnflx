// @flow
import React from "react";
import { Link } from "gatsby";
import Svg from "../Svg";
import SignupCTA from "../../pages/Homepage/Signup/Signup";
import styles from "./Footer.module.scss";

const Footer = () => (
  <>
    <SignupCTA />
    <footer className={styles["footer"]}>
      <div className={styles["footer__inner"]}>
        <ul className={styles["footer__list"]}>
          <h5 className={styles["footer__list-title"]}>Product</h5>
          <li className={styles["footer__list-item"]}>
            <Link to="/" className={styles["footer__list-item-link"]}>
              Home
            </Link>
          </li>
          <li className={styles["footer__list-item"]}>
            <Link to="/product" className={styles["footer__list-item-link"]}>
              Product
            </Link>
          </li>
          <li className={styles["footer__list-item"]}>
            <Link to="/pricing" className={styles["footer__list-item-link"]}>
              Pricing
            </Link>
          </li>
          <li className={styles["footer__list-item"]}>
            <Link
              to="/flex-pricing"
              className={styles["footer__list-item-link"]}
            >
              Flex Pricing
            </Link>
          </li>
          <li className={styles["footer__list-item"]}>
            <Link
              to="/integrations"
              className={styles["footer__list-item-link"]}
            >
              Integrations
            </Link>
          </li>
        </ul>

        <ul className={styles["footer__list"]}>
          <h5 className={styles["footer__list-title"]}>Connect</h5>
          <li className={styles["footer__list-item"]}>
            <a
              href="https://www.twitter.com/getconflux"
              className={styles["footer__list-item-link"]}
            >
              Twitter
            </a>
          </li>
          <li className={styles["footer__list-item"]}>
            <a
              href="https://www.producthunt.com/posts/conflux-2"
              className={styles["footer__list-item-link"]}
            >
              Product Hunt
            </a>
          </li>
          <li className={styles["footer__list-item"]}>
            <a
              href="linkedin.com/company/getconflux"
              className={styles["footer__list-item-link"]}
            >
              Linked In
            </a>
          </li>
        </ul>

        <ul className={styles["footer__list"]}>
          <h5 className={styles["footer__list-title"]}>Support</h5>
          <li className={styles["footer__list-item"]}>
            <a
              href="https://ideas.cnflx.io"
              className={styles["footer__list-item-link"]}
            >
              Feature requests
            </a>
          </li>
          <li className={styles["footer__list-item"]}>
            <a
              href="mailto:contact@cnflx.io"
              className={styles["footer__list-item-link"]}
            >
              Contact us
            </a>
          </li>
        </ul>

        <div className={styles["footer__details"]}>
          <Link to="/" className={styles["footer__logo"]}>
            <Svg name="logo" />
          </Link>
          <p className={styles["footer__address"]}>
            Ambachtsmark 164, Almere, Netherlands
          </p>
          <div className={styles["footer__copyright"]}>
            <span>&copy; Conflux 2019.</span>
            <ul className={styles["footer__copyright-list"]}>
              <li className={styles["footer__copyright-list-item"]}>
                <Link
                  to="/privacy"
                  className={styles["footer__copyright-list-item-link"]}
                >
                  Privacy
                </Link>
              </li>
              <li className={styles["footer__copyright-list-item"]}>
                <Link
                  to="#"
                  className={styles["footer__copyright-list-item-link"]}
                >
                  Terms
                </Link>
              </li>
              <li className={styles["footer__copyright-list-item"]}>
                <Link
                  to="/cookies-policy"
                  className={styles["footer__copyright-list-item-link"]}
                >
                  Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </>
);

export default Footer;
