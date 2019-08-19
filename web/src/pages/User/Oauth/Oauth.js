import React from "react";
import Signin from "../SigninComponent";
import InputLabel from "../../../components/InputLabel";
import styles from "../User.module.scss";
import { Form, Field } from "react-final-form";

const Oauth = () => {
  const onSubmit = async values => {
    const data = values;
    const location = window.location;
    const domain = data.workspace.replace(/[^A-Za-z0-9\\\-]/g, "");
    if (domain.length) {
      window.location = `${location.protocol}//${domain}.cnflx.io/oauth${
        location.search
      }`;
    }
  };

  return (
    <Signin title="Oauth">
      <Form
        onSubmit={onSubmit}
        validate={values => {
          const errors = {};
          if (!values.workspace) {
            errors.workspace = "Required";
          }
          return errors;
        }}
        render={({ pristine, submitting, values }) => (
          <form onSubmit={onSubmit}>
            <Field
              name="workspace"
              label="Workspace URL"
              type="text"
              placeholder="your-workspace-url"
              component={InputLabel}
            />
            <button
              type="submit"
              disabled={pristine || submitting}
              onClick={e => {
                e.preventDefault();
                onSubmit(values);
              }}
              className={styles["button"]}
            >
              Continue
            </button>
          </form>
        )}
      />
    </Signin>
  );
};

export default Oauth;
