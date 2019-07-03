import React from "react";
import PropTypes from "prop-types";
import styles from "./Input.module.scss";

const Input = ({ type, placeholder, name }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      id={name}
      className={styles["input"]}
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
