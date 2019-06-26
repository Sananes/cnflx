// @flow
import React from "react";
import { Link } from "gatsby";
import Icon from "../../Icon";
import Button from "../../Button";
import styles from "./Menu.module.scss";

type Props = {
  menu: {
    label: string,
    path: string,
    handle: string
  }
};
class Menu extends React.Component {
  state = { showMenu: false };

  toggleMenu = () => {
    this.setState({
      showMenu: !this.state.showMenu
    });
  };

  render() {
    const { menu } = this.props;
    const menuActive = this.state.showMenu
      ? styles["menu__list-mobile--is-active"]
      : "";
    const burgerActive = this.state.showMenu
      ? styles["menu__toggle--is-active"]
      : "";

    return (
      <React.Fragment>
        <nav className={styles["menu"]}>
          <button
            className={`${styles["menu__toggle"]} ${burgerActive}`}
            onClick={this.toggleMenu}
          >
            <Icon name={burgerActive ? "close" : "menu"} />
          </button>
          <ul
            className={`mobile-menu ${
              styles["menu__list-mobile"]
            } ${menuActive}`}
          >
            <div className={styles["menu__list-mobile-wrapper"]}>
              {menu.map(item => (
                <li
                  className={styles["menu__list-mobile-item"]}
                  key={item.path}
                >
                  <Link
                    to={item.path}
                    className={styles["menu__list-mobile-item-link"]}
                    activeClassName={
                      styles["menu__list-mobile-item-link--active"]
                    }
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li
                className={`${styles["menu__list-mobile-item"]} ${
                  styles["menu__list-mobile-item--signin"]
                }`}
                key="signin"
              >
                <Link
                  to="/signin"
                  className={styles["menu__list-mobile-item-link"]}
                >
                  Sign in
                </Link>
              </li>
              <li
                className={`${styles["menu__list-mobile-item"]} ${
                  styles["menu__list-mobile-item--signup"]
                }`}
                key="signup"
              >
                <Button
                  className={`${styles["menu__list-mobile-item-link"]} ${
                    styles["menu__list-mobile-item-link"]
                  }`}
                  text="Try it Free &#10230;"
                />
              </li>
            </div>
          </ul>
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
            <Button
              link="#"
              className={styles["menu__list-item-link-button"]}
              text="Try it Free"
            />
          </li>
        </ul>
      </React.Fragment>
    );
  }
}

export default Menu;
