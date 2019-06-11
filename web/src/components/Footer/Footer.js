// @flow
import React from "react";
import { Link } from "gatsby";
import { getSvg } from "../../utils";
import Svg from "../Svg";
import styles from "./Footer.module.scss";

const Footer = () => (
  <footer className={styles["footer"]}>
    <div className={styles["footer__inner"]}>
      <ul className={styles["footer__list"]}>
        <h5 className={styles["footer__list-title"]}>Product</h5>
        <li className={styles["footer__list-item"]}>
          <Link to="#" className={styles["footer__list-item-link"]}>
            Home
          </Link>
        </li>
        <li className={styles["footer__list-item"]}>
          <Link to="#" className={styles["footer__list-item-link"]}>
            Product
          </Link>
        </li>
        <li className={styles["footer__list-item"]}>
          <Link to="#" className={styles["footer__list-item-link"]}>
            Pricing
          </Link>
        </li>
        <li className={styles["footer__list-item"]}>
          <Link to="#" className={styles["footer__list-item-link"]}>
            Integrations
          </Link>
        </li>
      </ul>

      <ul className={styles["footer__list"]}>
        <h5 className={styles["footer__list-title"]}>Connect</h5>
        <li className={styles["footer__list-item"]}>
          <Link to="#" className={styles["footer__list-item-link"]}>
            Twitter
          </Link>
        </li>
        <li className={styles["footer__list-item"]}>
          <Link to="#" className={styles["footer__list-item-link"]}>
            Product Hunt
          </Link>
        </li>
        <li className={styles["footer__list-item"]}>
          <Link to="#" className={styles["footer__list-item-link"]}>
            Linked In
          </Link>
        </li>
      </ul>

      <ul className={styles["footer__list"]}>
        <h5 className={styles["footer__list-title"]}>Support</h5>
        <li className={styles["footer__list-item"]}>
          <Link to="#" className={styles["footer__list-item-link"]}>
            Feature requests
          </Link>
        </li>
        <li className={styles["footer__list-item"]}>
          <Link to="#" className={styles["footer__list-item-link"]}>
            Contact us
          </Link>
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
                to="#"
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
                to="#"
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
);

export default Footer;
