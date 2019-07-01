// @flow
import React, { useState } from "react";
import styles from "./Header.module.scss";
import { Link } from "gatsby";
import Svg from "../Svg";
import { useSiteMetadata } from "../../hooks";
import Headroom from "react-headroom";
import Menu from "./Menu";
import MobileMenu from "./Menu/MobileMenu";

const Header = props => {
  const { menu } = useSiteMetadata();
  const [showMenu, setShowMenu] = useState(false);

  function toggleMenu(e) {
    e.preventDefault();
    setShowMenu(!showMenu);
  }

  return (
    <React.Fragment>
      <Headroom disableInlineStyles={true}>
        <div className={`header ${styles["header"]}`}>
          <div className={`header-inner ${styles["header__inner"]}`}>
            <div className={styles["header__logo"]}>
              <Link to="/" className={styles["header__logolink"]}>
                <Svg name="logo" />
              </Link>
            </div>
            <Menu menu={menu} toggleMenu={toggleMenu} showMenu={showMenu} />
          </div>
        </div>
      </Headroom>

      <MobileMenu menu={menu} showMenu={showMenu} />
    </React.Fragment>
  );
};

export default Header;
