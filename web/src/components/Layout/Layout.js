// @flow
import React from "react";
import Helmet from "react-helmet";
import { Link } from "gatsby";
import CookieConsent, { Cookies } from "react-cookie-consent";
import Header from "../Header";
import Footer from "../Footer";
import styles from "./Layout.module.scss";

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
          href="https://fonts.googleapis.com/css?family=Barlow:400,500,600,700&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <Header />
      {children}
      <Footer />
      <CookieConsent
        location="bottom"
        acceptOnScroll={true}
        contentClasses="cookie-banner-content"
        disableStyles={true}
        buttonText="Accept"
        cookieName="cookieBanner"
        expires={150}
      >
        We use cookies to ensure you get the best experience.{" "}
        <Link to="/cookies-policy">Learn more</Link>
      </CookieConsent>
    </div>
  );
};

export default Layout;
