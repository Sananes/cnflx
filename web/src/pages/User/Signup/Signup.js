import React, { useState, useContext } from "react";
import { Link } from "gatsby";
import { Form, Field } from "react-final-form";
import LayoutUser from "../../../components/LayoutUser";
import InputLabel from "../../../components/InputLabel";
import styles from "../User.module.scss";
import { useSiteMetadata } from "../../../hooks";
import { GlobalContext } from "../../../context/GlobalContext";

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const SignupIndex = () => {
  const { name } = useSiteMetadata();
  const [state, setState] = useContext(GlobalContext);
  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
  const [error, setError] = useState("");

  console.log(state.email);
  const onSubmit = async values => {
    const data = values;
    fetch("https://api.cnflx.io/api/v1/auth/register", {
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
    })
      .then(response => response.json())
      .catch(error => console.error("Error:", error))
      .then(response => {
        if (response.url === undefined) {
          setError(
            "There was an issue when creating your account. Make sure you have provided all details."
          );
        } else {
          window.location = `${response.url}/login?token=${response.token}`;
        }
      });
  };

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
          initialValues={{
            email: state.email
          }}
          validate={values => {
            const errors = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (!validateEmail(values.email)) {
              errors.email = "This is not a valid email address";
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
                Create account
              </button>
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
