import React from "react";
import PropTypes from "prop-types";
import styles from "./Input.module.scss";

const Input = ({ type, placeholder, name, validate, required, id }) => {
  return (
    <input
      type={type}
      onChange={validate}
      placeholder={placeholder}
      id={name}
      name={name}
      className={styles["input"]}
      required={required ? "required" : null}
    />
  );
};

export default Input;

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string
};

Input.defaultProps = {
  type: "text",
  placeholder: "Text"
};
