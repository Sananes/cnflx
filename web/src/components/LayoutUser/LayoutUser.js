import React from "react";
import Helmet from "react-helmet";
import { Link } from "gatsby";
import Icon from "../../components/Icon";
import Svg from "../../components/Svg";
import styles from "./LayoutUser.module.scss";

type Props = {
  children: ReactNode,
  title: string,
  customStyle: false,
  className?: string,
  description?: string
};

const LayoutUser = ({ children, title, description, className }: Props) => {
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
      <Link to="/" className={styles["back"]}>
        <Icon name="close" />
      </Link>
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
