import React, { useState, useContext } from "react";
import { Link } from "gatsby";
import InputLabel from "../../../components/InputLabel";
import Signin from "../SigninComponent/SigninComponent";
import { Form, Field } from "react-final-form";
import styles from "../User.module.scss";
import { useSiteMetadata } from "../../../hooks";

const SetupIntercom = () => {
  const { name } = useSiteMetadata();

  const onSubmit = async values => {
    const data = values;
    //https://ideas.cnflx.io/login?redirectUrl=/integrations/5
    const location = window.location;
    const domain = data.workspace.replace(/[^A-Za-z0-9\\\-]/g, "");
    if (
      location.pathname === "/setup-intercom/" ||
      location.pathname === "/setup-intercom"
    ) {
      window.location = `${
        location.protocol
      }//${domain}.cnflx.io/integrations/10`;
    } else {
      window.location = `${
        location.protocol
      }//${domain}.cnflx.io/integrations/5`;
    }
  };

  return (
    <Signin
      title={`Signin | ${name}`}
      signinTitle="Welcome back!"
      signinDescription="Sign in to your workflow"
      className={styles["signin"]}
    >
      <Form
        onSubmit={onSubmit}
        validate={values => {
          const errors = {};
          if (!values.workspace) {
            errors.workspace = "Required";
          }
          return errors;
        }}
        render={({ submitting, pristine, values }) => (
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
    </Signin>
  );
};

export default SetupIntercom;
