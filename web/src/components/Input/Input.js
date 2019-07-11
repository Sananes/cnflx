import React from "react";
import PropTypes from "prop-types";
import styles from "./Input.module.scss";

const Input = ({
  placeholder,
  name,
  validate,
  required,
  value,
  meta,
  type,
  id,
  ...input
}) => {
  return (
    <input
      type={type}
      id={name}
      name={name}
      value={value}
      placeholder={placeholder}
      className={
        meta.touched && meta.error
          ? `${styles["input"]} ${styles["input--required"]}`
          : `${styles["input"]}`
      }
      required={required ? "required" : null}
      {...input}
    />
  );
};

export default Input;
