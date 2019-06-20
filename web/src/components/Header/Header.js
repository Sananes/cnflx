// @flow
import React from "react";
import styles from "./Header.module.scss";
import { Link } from "gatsby";
import Svg from "../Svg";
import { useSiteMetadata } from "../../hooks";
import Menu from "./Menu";

type Props = {
  isIndex?: boolean
};

const Header = ({ isIndex }: Props) => {
  const { menu } = useSiteMetadata();

  return (
    <div className={`header ${styles["header"]}`}>
      <div className={`header-inner ${styles["header__inner"]}`}>
        <div className={styles["header__logo"]}>
          <Link to="/" className={styles["header__logolink"]}>
            <Svg name="logo" />
          </Link>
        </div>
        <Menu menu={menu} />
      </div>
    </div>
  );
};

export default Header;
