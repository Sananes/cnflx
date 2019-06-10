// @flow
import React from "react";
import styles from "./Header.module.scss";
import { Link } from "gatsby";
import { getSvg } from "../../utils";
import Svg from "../Svg";
import { useSiteMetadata } from "../../hooks";
import Menu from "./Menu";

type Props = {
  isIndex?: boolean
};

const Header = ({ isIndex }: Props) => {
  const { menu } = useSiteMetadata();

  return (
    <div className={styles["header"]}>
      <div className={styles["header__inner"]}>
        <div className={styles["header__logo"]}>
          <Link to="/" className={styles["header__logolink"]}>
            <Svg icon={getSvg("logo")} />
          </Link>
        </div>
        <Menu menu={menu} />
      </div>
    </div>
  );
};

export default Header;
