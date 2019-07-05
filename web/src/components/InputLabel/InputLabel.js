import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import Input from "../Input";
import styles from "./InputLabel.module.scss";

const InputLabel = ({ meta }) => {
  return (
    <div className={styles["fieldset"]}>
      <div className={styles["label"]}>
        <label htmlFor={input.name}>{label}</label>
      </div>
      <Input {...input} />
      {meta.touched ? meta.error : ""}
    </div>
  );
};

export default InputLabel;

InputLabel.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  label: PropTypes.string,
  labelLink: PropTypes.string,
  prefix: PropTypes.bool,
  prefixText: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired
};

InputLabel.defaultProps = {
  type: "text",
  name: "Input",
  prefix: false,
  prefixText: "cnflx.io",
  placeholder: "Text"
};
