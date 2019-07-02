import React from "react";
import Layout from "../../components/Layout";
import Button from "../../components/Button";
import styles from "../Signin/Signin.module.scss";
import { useSiteMetadata } from "../../hooks";

const SigninIndex = () => {
  const { name } = useSiteMetadata();
  return (
    <Layout
      title={`Signin | ${name}`}
      customStyle={true}
      className={styles["signin"]}
    >
      <div className={styles["signin__sidebar"]}>
        <h2 className={styles["signin__sidebar-title"]}>Create your account</h2>
        <form className={styles["form"]}>
          <div className={styles["input-wrapper"]}>
            <label for="email" className={styles["label"]}>
              Email address:
            </label>
            <input
              id="email"
              className={styles["input"]}
              type="text"
              placeholder="you@example.com"
            />
          </div>
          <div className={styles["input-wrapper"]}>
            <label for="password" className={styles["label"]}>
              Password:
              <a className={styles["forgot"]} href="">
                Forgot Password?
              </a>
            </label>
            <input
              id="password"
              className={styles["input"]}
              type="password"
              placeholder="Enter 6 characters or more"
            />
          </div>
          <Button className={styles["button"]} text="Signin" />
        </form>
      </div>
    </Layout>
  );
};

export default SigninIndex;
