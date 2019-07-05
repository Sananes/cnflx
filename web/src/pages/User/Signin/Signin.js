import React from "react";
import { Link } from "gatsby";
import LayoutUser from "../../../components/LayoutUser";
import Input from "../../../components/Input";
import { Form, Field } from "react-final-form";
import Button from "../../../components/Button";
import Icon from "../../../components/Icon";
import Svg from "../../../components/Svg";
import styles from "../User.module.scss";
import { useSiteMetadata } from "../../../hooks";

const InputLabel = ({ input, meta, label, placeholder, type, ...rest }) => (
  <div className={styles["fieldset"]}>
    <div className={styles["label"]}>
      <label htmlFor={input.name}>{label}</label>
    </div>
    <Input {...input} meta={meta} placeholder={placeholder} type={input.type} />
    {meta.touched ? <p className={styles["required"]}>{meta.error}</p> : ""}
  </div>
);

const SigninIndex = () => {
  const { name } = useSiteMetadata();
  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

  const onSubmit = async values => {
    const data = values;
    const body = {
      email: data.email,
      password: data.password,
      organization: ""
    };
    fetch("https://api.cnflx.io/api/v1/auth/login", {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    });
  };

  return (
    <LayoutUser title={`Signin | ${name}`} className={styles["signin"]}>
      <div className={styles["form-container"]}>
        <h2 className={styles["title"]}>
          Welcome back! <br />
          <span>Sign in to your workflow</span>
        </h2>

        <Form
          onSubmit={onSubmit}
          validate={values => {
            const errors = {};
            if (!values.email) {
              errors.email = "Required";
            }
            return errors;
          }}
          render={({ handleSubmit, reset, submitting, pristine, values }) => (
            <form onSubmit={handleSubmit}>
              <Field
                name="workspace"
                label="Workspace URL"
                type="text"
                placeholder="your-workspace-url"
                component={InputLabel}
              />
              <Field
                name="email"
                label="Email address"
                type="text"
                placeholder="you@example.com"
                component={InputLabel}
              />
              <Field
                name="password"
                label="Password"
                type="text"
                placeholder="Enter 5 characters or more"
                component={InputLabel}
              />
              <button
                type="submit"
                className={styles["button"]}
                disabled={pristine || submitting}
              >
                Submit
              </button>
              <pre>{JSON.stringify(values, 0, 2)}</pre>
            </form>
          )}
        />
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
