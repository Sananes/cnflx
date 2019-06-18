// @flow
import React from "react";
import Helmet from "react-helmet";
import type { Node as ReactNode } from "react";
import Header from "../Header";
import Footer from "../Footer";
import styles from "./Layout.module.scss";

type Props = {
  children: ReactNode,
  title: string,
  className?: string,
  description?: string
};

const Layout = ({ children, title, description, className }: Props) => (
  <div className={className ? className : styles.layout}>
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
    <Header />
    {children}
    <Footer />
  </div>
);

export default Layout;
