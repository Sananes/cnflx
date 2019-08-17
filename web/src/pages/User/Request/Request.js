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

const SetupIntercom = () => {
  const { name } = useSiteMetadata();

  const onSubmit = async values => {
    const data = values;
    const location = window.location;
    const email = data.email.replace(/[^A-Za-z0-9\\\-]/g, "");
    // document.querySelector('form').addEventListener('submit', function (event) {
    //   event.preventDefault();
    //   const email = document.getElementById('email').value;
    //   if (email.length) {
    //     button.setAttribute('disabled', '');
    //     var xhr = new XMLHttpRequest();
    //     xhr.open('POST', 'https://api.cnflx.io/api/v1/gdpr?email=' + email);
    //     xhr.onload = function() {
    //       button.removeAttribute('disabled', '');
    //       if (xhr.status === 201) {
    //         success.innerText = 'Please check your email inbox.';
    //         document.querySelector('input').value = "";
    //       }
    //       else {
    //         error.innerText = "Sorry we couldn't find that email address!";
    //         document.querySelector('input').value = "";
    //       }
    //     };
    //     xhr.send();
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
            <form onSubmit={onSubmit}>
              <div className={styles["show-form"]}>
                <Field
                  name="workspace"
                  label="Workspace URL"
                  type="text"
                  placeholder="your-workspace-url"
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
                  Continue
                </button>
              </div>
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
            Don't have an account? <Link to="/signup">Sign up</Link>
          </p>
        </div>
      </div>
    </LayoutUser>
  );
};

export default SetupIntercom;
