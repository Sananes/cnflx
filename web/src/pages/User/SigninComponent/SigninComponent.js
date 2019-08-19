import React from "react";
import { Link } from "gatsby";
import LayoutUser from "../../../components/LayoutUser";
import styles from "../User.module.scss";
import { useSiteMetadata } from "../../../hooks";
import { Form } from "react-final-form";

const SigninComponent = ({
  title,
  children,
  signinTitle,
  signinDescription
}) => {
  const { name } = useSiteMetadata();

  return (
    <LayoutUser title={`${title} | ${name}`} className={styles["signin"]}>
      <div className={styles["form-container"]}>
        <h2 className={styles["title"]}>
          {signinTitle || "Welcome back"}
          <br />
          <span>{signinDescription || "Enter your workspace url"}</span>
        </h2>
        {children}
        <div className={styles["notice--only"]}>
          <p>
            Don't have an account? <Link to="/signup">Sign up</Link>
          </p>
        </div>
      </div>
    </LayoutUser>
  );
};

export default SigninComponent;
