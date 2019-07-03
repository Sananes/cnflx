import React from "react";
import { Link } from "gatsby";
import Layout from "../../components/Layout";
import InputLabel from "../../components/InputLabel";
import Button from "../../components/Button";
import Icon from "../../components/Icon";
import Svg from "../../components/Svg";
import styles from "./Signin.module.scss";
import { useSiteMetadata } from "../../hooks";

const SigninIndex = () => {
  const { name } = useSiteMetadata();
  return (
    <Layout
      title={`Signin | ${name}`}
      customStyle={true}
      className={styles["signin"]}
    >
      <Link to="/" className={styles["back"]}>
        <Icon name="close" />
      </Link>
      <div className={styles["sidebar"]}>
        <Link to="/" className={styles["logo"]}>
          <Svg name="logo" />
        </Link>
        <div className={styles["form-container"]}>
          <form className={styles["form"]}>
            <h2 className={styles["sidebar-title"]}>
              Welcome back.
              <br /> <span>Sign into your workspace.</span>
            </h2>

            <InputLabel
              label="Workspace URL"
              placeholder="your-workspace-url"
              prefix={true}
              prefixText="cnflx.io"
              name="workspace"
              className={styles["fieldset"]}
            />
            <Button className={styles["button"]} text="Continue" />
          </form>
          <div className={styles["notice"]}>
            <p>
              Don’t know your workspace URL?{" "}
              <Link to="/signup" className={styles["link"]}>
                Find your workspace{" "}
              </Link>
            </p>
          </div>
          <div className={styles["notice"]}>
            <p>
              Don't have an account? <Link to="/signup">Sign up</Link>
            </p>
          </div>
        </div>
      </div>
      <div className={styles["promotion"]} />
    </Layout>
  );
};

export default SigninIndex;
