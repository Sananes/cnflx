import React from "react";
import { Link } from "gatsby";
import Icon from "../../../Icon";
import Button from "../../../Button";
import styles from "./MobileMenu.module.scss";

type Props = {
  menu: {
    label: string,
    path: string,
    handle: string
  }
};

const MobileMenu = ({ menu, showMenu }) => {
  const menuActive = showMenu ? styles["mobile__menu--is-active"] : "";
  const burgerActive = showMenu ? styles["mobile__menu--is-active"] : "";

  return (
    <div className={`mobile-menu ${styles["mobile__menu"]} ${menuActive}`}>
      <ul>
        <div className={styles["mobile__menu-wrapper"]}>
          {menu.map(item => (
            <li className={styles["mobile__menu-item"]} key={item.path}>
              <Link
                to={item.path}
                className={styles["mobile__menu-item-link"]}
                activeClassName={styles["mobile__menu-item-link--active"]}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li
            className={`${styles["mobile__menu-item"]} ${
              styles["mobile__menu-item--signin"]
            }`}
            key="signin"
          >
            <Link to="/signin" className={styles["mobile__menu-item-link"]}>
              Sign in
            </Link>
          </li>
          <li
            className={`${styles["mobile__menu-item"]} ${
              styles["mobile__menu-item--signup"]
            }`}
            key="signup"
          >
            <Button
              className={`${styles["mobile__menu-item-link"]} ${
                styles["mobile__menu-item-link"]
              }`}
              text="Try it Free &#10230;"
            />
          </li>
        </div>
      </ul>
    </div>
  );
};

export default MobileMenu;
