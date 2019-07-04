import React from "react";
import { Link } from "gatsby";
import LayoutUser from "../../../components/LayoutUser";
import InputLabel from "../../../components/InputLabel";
import Form from "../Form/Form.js";
import Button from "../../../components/Button";
import Icon from "../../../components/Icon";
import Svg from "../../../components/Svg";
import styles from "../User.module.scss";
import { useSiteMetadata } from "../../../hooks";

const SigninIndex = () => {
  const { name } = useSiteMetadata();
  return (
    <LayoutUser title={`Signin | ${name}`} className={styles["signin"]}>
      <div className={styles["form-container"]}>
        <Form className={styles["form"]}>
          <h2 className={styles["title"]}>
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
        </Form>
        <div className={styles["notice"]}>
          <p>
            Don’t know your workspace URL?{" "}
            <Link to="/signup" className={styles["link"]}>
              Find your workspace
            </Link>
          </p>
        </div>
        <div className={styles["notice"]}>
          <p>
            Don't have an account? <Link to="/signup">Sign up</Link>
          </p>
        </div>
      </div>
    </LayoutUser>
  );
};

export default SigninIndex;
