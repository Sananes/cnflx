import React, { useState, useContext } from "react";
import { Link } from "gatsby";
import LayoutUser from "../../../components/LayoutUser";
import InputLabel from "../../../components/InputLabel";
import { Form, Field } from "react-final-form";
import styles from "../User.module.scss";
import { useSiteMetadata } from "../../../hooks";
import { GlobalContext } from "../../../context/GlobalContext";

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const SigninIndex = () => {
  const { name } = useSiteMetadata();
  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

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
        url: data.workspace
      })
    })
      .then(response => response.json())
      .catch(error => console.error("Error:", error))
      .then(response => {
        if (response.url === undefined) {
          return null;
        } else {
          window.location = `${response.url}/login?token=${response.token}`;
        }
      });
  };

  return (
    <LayoutUser title={`Signin | ${name}`} className={styles["signin"]}>
      <div className={styles["form-container"]}>
        <h2 className={styles["title"]}>Reset Password</h2>

        <Form
          onSubmit={onSubmit}
          validate={values => {
            const errors = {};
            if (!values.workspace) {
              errors.workspace = "Required";
            }
            if (!values.email) {
              errors.email = "Required";
            } else if (!validateEmail(values.email)) {
              errors.email = "This is not a valid email address";
            }
            return errors;
          }}
          render={({ handleSubmit, reset, submitting, pristine, values }) => (
            <form onSubmit={onSubmit}>
              <Field
                name="email"
                label="Email address"
                type="email"
                placeholder="you@example.com"
                component={InputLabel}
              />
              <button
                type="submit"
                onClick={e => {
                  e.preventDefault();
                  onSubmit(values);
                }}
                className={styles["button"]}
                disabled={pristine || submitting}
              >
                Get Reset Link
              </button>
            </form>
          )}
        />
        {/*        <div className={styles["notice"]}>
          <p>
            Don’t know your workspace URL?{" "}
            <Link to="/signup" className={styles["link"]}>
              Find your workspace
            </Link>
          </p>
          </div> */}
        <div className={styles["notice--only"]}>
          <p>
            Remembered your password? <Link to="/signin">Sign in</Link>
          </p>
        </div>
      </div>
    </LayoutUser>
  );
};

export default SigninIndex;
