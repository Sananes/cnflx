import React, { useState } from "react";
import { Link } from "gatsby";
import { Form, Field } from "react-final-form";
import LayoutUser from "../../../components/LayoutUser";
import Button from "../../../components/Button";
import InputLabel from "../../../components/InputLabel";
import Input from "../../../components/Input";
import styles from "../User.module.scss";
import { useSiteMetadata } from "../../../hooks";

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const SignupIndex = () => {
  const { name } = useSiteMetadata();
  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

  const onSubmit = async values => {
    const data = values;
    const body = {
      email: data.email,
      password: data.password,
      fullName: data.fullName,
      organization: {
        name: data.organization,
        url: data.organization
      }
    };
    fetch("https://api.cnflx.io/api/v1/auth/register", {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    });
  };

  const InputLabel = ({ input, meta, label, placeholder, type, ...rest }) => (
    <div className={styles["fieldset"]}>
      <div className={styles["label"]}>
        <label htmlFor={input.name}>{label}</label>
      </div>
      <Input
        {...input}
        meta={meta}
        placeholder={placeholder}
        type={input.type}
      />
      {meta.touched ? <p className={styles["required"]}>{meta.error}</p> : ""}
    </div>
  );

  return (
    <LayoutUser
      title={`Sign up - 14 day free trial | ${name}`}
      className={styles["signup"]}
    >
      <div className={styles["form-container"]}>
        <h2 className={styles["title"]}>
          Create your account <br />
          <span>It's free for 14 days</span>
        </h2>

        <Form
          onSubmit={onSubmit}
          validate={values => {
            const errors = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (!validateEmail(values.email)) {
              errors.email = "This is not an email";
            }
            if (!values.password) {
              errors.password = "Required";
            }
            if (!values.fullName) {
              errors.fullName = "Required";
            }
            if (!values.organization) {
              errors.organization = "Required";
            }
            // if (!values.confirm) {
            //   errors.confirm = "Required";
            // } else if (values.confirm !== values.password) {
            //   errors.confirm = "Must match";
            // }
            return errors;
          }}
          render={({
            handleSubmit,
            form,
            reset,
            submitting,
            pristine,
            values
          }) => (
            <form onSubmit={handleSubmit}>
              <Field
                name="email"
                label="Email address"
                type="email"
                placeholder="you@example.com"
                component={InputLabel}
              />
              <Field
                name="password"
                type="password"
                label="Password"
                placeholder="Enter 5 characters or more"
                component={InputLabel}
              />
              <Field
                name="fullName"
                type="text"
                label="Full Name"
                placeholder="Enter 5 characters or more"
                component={InputLabel}
              />
              <Field
                name="organization"
                type="text"
                label="Workspace URL"
                placeholder="your-workspace-url"
                component={InputLabel}
              />
              <button
                className={styles["button"]}
                type="submit"
                disabled={pristine || submitting}
              >
                Submit
              </button>
              <pre>{JSON.stringify(values, 0, 2)}</pre>
            </form>
          )}
        />
        <div className={`${styles["notice"]} ${styles["notice--only"]}`}>
          <p>
            Already have an account? <Link to="/signin">Sign in</Link>
          </p>
        </div>
      </div>
    </LayoutUser>
  );
};

export default SignupIndex;
