// @flow
import React, { useContext } from "react";
import { PricingContext } from "../../context/PricingContext";
import Helmet from "react-helmet";
import Header from "../Header";
import Footer from "../Footer";
import styles from "./Layout.module.scss";
import CookieBanner from "react-cookie-banner";

type Props = {
  children: ReactNode,
  title: string,
  className?: string,
  description?: string
};

const Layout = ({ children, title, description, className }: Props) => {
  return (
    <div className={className ? className : styles.layout}>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:site_name" content={title} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <link
          href="https://fonts.googleapis.com/css?family=Barlow:400,500,600&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <CookieBanner
        message="Yes, we use cookies. If you don't like it change website, we won't miss you!"
        onAccept={() => {}}
        className={styles["cookie-banner"]}
        disableStyle={true}
        cookie="user-has-accepted-cookies"
      />
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
