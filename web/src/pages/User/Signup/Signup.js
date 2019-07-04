import React from "react";
import { Link } from "gatsby";
import LayoutUser from "../../../components/LayoutUser";
import Button from "../../../components/Button";
import InputLabel from "../../../components/InputLabel";
import Form from "../Form/Form.js";
import styles from "../User.module.scss";
import { useSiteMetadata } from "../../../hooks";

const SigninIndex = () => {
  const { name } = useSiteMetadata();

  const validations = {
    email: ["required", "email"],
    password: ["required", "password", "min:3", "max:15"]
  };

  return (
    <LayoutUser title={`Signin | ${name}`} className={styles["signup"]}>
      <div className={styles["form-container"]}>
        <h2 className={styles["title"]}>
          Create your account <br />
          <span>It's free for 14 days</span>
        </h2>
        <Form className={styles["form"]}>
          <InputLabel
            name="email"
            type="email"
            label="Email address"
            required={true}
            validations={validations}
            placeholder="you@example.com"
          />
          <InputLabel
            name="password"
            type="password"
            label="Password"
            required={true}
            validations={validations}
            placeholder="Enter 5 or more characters"
            helper="Forgot Password?"
            helperLink="/forgot-password"
          />
          <InputLabel
            name="confirmPassword"
            type="password"
            label="Confirm Password"
            required={true}
            validations={validations}
            placeholder="Enter 5 or more characters"
          />
          <InputLabel
            label="Workspace URL"
            placeholder="your-workspace-url"
            prefix={true}
            prefixText="cnflx.io"
            name="workspace"
            className={styles["fieldset"]}
          />
          <Button className={styles["button"]} text="Create account" />
        </Form>
        <div className={`${styles["notice"]} ${styles["notice--only"]}`}>
          <p>
            Already have an account? <Link to="/signin">Sign in</Link>
          </p>
        </div>
      </div>
    </LayoutUser>
  );
};

export default SigninIndex;
