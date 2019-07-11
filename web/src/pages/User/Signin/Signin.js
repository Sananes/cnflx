import React, { useState, useContext } from "react";
import { Link } from "gatsby";
import LayoutUser from "../../../components/LayoutUser";
import Input from "../../../components/Input";
import { Form, Field } from "react-final-form";
import Button from "../../../components/Button";
import Icon from "../../../components/Icon";
import Svg from "../../../components/Svg";
import styles from "../User.module.scss";
import { useSiteMetadata } from "../../../hooks";
import { GlobalContext } from "../../../context/GlobalContext";

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const InputLabel = ({
  input,
  meta,
  label,
  placeholder,
  value,
  type,
  ...rest
}) => (
  <div className={styles["fieldset"]}>
    <div className={styles["label"]}>
      <label htmlFor={input.name}>{label}</label>
    </div>
    <Input
      {...input}
      meta={meta}
      value={input.value}
      placeholder={placeholder}
      type={input.type}
    />
    {meta.touched ? <p className={styles["required"]}>{meta.error}</p> : ""}
  </div>
);

const SigninIndex = () => {
  const { name } = useSiteMetadata();
  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
  const [state] = useContext(GlobalContext);

  const showForm = async values => {
    console.log("clicked");
    if (values.workspace) {
      window.location = `https://${values.workspace}.cnflx.io/login`;
    } else {
      return null;
    }
  };

  const onSubmit = async values => {
    const data = values;
    fetch("https://api.cnflx.io/api/v1/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: data.email,
        password: data.password,
        fullName: data.fullName,
        organization: {
          name: data.organization,
          url: data.organization
        }
      })
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
            if (!values.workspace) {
              errors.workspace = "Required";
            }
            return errors;
          }}
          render={({ handleSubmit, reset, submitting, pristine, values }) => (
            <form onSubmit={handleSubmit}>
              <div>
                <Field
                  name="workspace"
                  label="Workspace URL"
                  type="text"
                  placeholder="your-workspace-url"
                  component={InputLabel}
                />
                <button
                  type="button"
                  onClick={() => showForm(values)}
                  className={styles["button"]}
                  disabled={pristine || submitting}
                >
                  Continue
                </button>
              </div>
              <div style={{ display: "none" }}>
                <p>{values.workspace}.cnflx.io</p>
                <Field
                  name="email"
                  label="Email address"
                  type="text"
                  value={state.email}
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
                  Continue
                </button>
              </div>
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
