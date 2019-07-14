import React from "react";
import Helmet from "react-helmet";
import { Link } from "gatsby";
import Icon from "../../components/Icon";
import Svg from "../../components/Svg";
import styles from "./LayoutUser.module.scss";
import { navigate } from "@reach/router";

type Props = {
  children: ReactNode,
  title: string,
  customStyle: false,
  className?: string,
  description?: string
};

const LayoutUser = ({ children, title, description, className }: Props) => {
  const goBack = e => {
    e.preventDefault();
    if (!window.history.back()) {
      navigate("/");
    } else {
      window.history.back();
    }
  };
  return (
    <div className={className ? className : styles["user"]}>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:site_name" content={title} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <link
          href="https://fonts.googleapis.com/css?family=Barlow:400,500,600&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <a href="#" onClick={goBack} className={styles["back"]}>
        <Icon name="close" />
      </a>
      <div className={styles["sidebar"]}>
        <Link to="/" className={styles["logo"]}>
          <Svg name="logo" />
        </Link>
        {children}
      </div>
      <div className={styles["promotion"]} />
    </div>
  );
};

export default LayoutUser;
