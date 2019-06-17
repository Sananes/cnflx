// @flow
import React from "react";
import { Link } from "gatsby";
import Button from "../../Button";
import styles from "./Menu.module.scss";

type Props = {
  menu: {
    label: string,
    path: string,
    handle: string
  }[]
};

const Menu = ({ menu }: Props) => (
  <React.Fragment>
    <nav className={styles["menu"]}>
      <ul className={styles["menu__list"]}>
        {menu.map(item => (
          <li className={styles["menu__list-item"]} key={item.path}>
            <Link
              to={item.path}
              className={styles["menu__list-item-link"]}
              activeClassName={styles["menu__list-item-link--active"]}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
    <ul className={styles["menu__list--account"]}>
      <li className={styles["menu__list-item--signin"]} key="signin">
        <Link to="/signin" className={styles["menu__list-item-link"]}>
          Sign in
        </Link>
      </li>
      <li className={styles["menu__list-item--signup"]} key="signup">
        <Button className={styles["menu__list-item-link"]} text="Try it Free" />
      </li>
    </ul>
  </React.Fragment>
);

export default Menu;
