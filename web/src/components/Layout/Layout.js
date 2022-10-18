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
    <div
      className={
        className ? `${styles["layout"]} ${className}` : styles["layout"]
      }
    >
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
      <div className={`${styles["inner"]} layout-inner`}>
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
            <script>
        (function(d,h,w){var gist=w.gist=w.gist||[];gist.methods=['trackPageView','identify','track','setAppId'];gist.factory=function(t){return function(){var e=Array.prototype.slice.call(arguments);e.unshift(t);gist.push(e);return gist;}};for(var i=0;i<gist.methods.length;i++){var c=gist.methods[i];gist[c]=gist.factory(c)}s=d.createElement('script'),s.src="https://widget.getgist.com",s.async=!0,e=d.getElementsByTagName(h)[0],e.appendChild(s),s.addEventListener('load',function(e){},!1),gist.setAppId("dmywdm46"),gist.trackPageView()})(document,'head',window);
    </script>
      </div>
    </div>
  );
};

export default Layout;
