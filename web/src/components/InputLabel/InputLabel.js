import React from "react";
import PropTypes from "prop-types";
import Input from "../Input";
import styles from "./InputLabel.module.scss";

const InputLabel = ({
  type,
  placeholder,
  name,
  label,
  className,
  prefix,
  prefixText
}) => {
  const isPrefix = prefix
    ? `${styles["wrapper"]} ${styles["prefix"]}`
    : styles["wrapper"];

  return (
    <div className={`${className} ${styles["fieldset"]}`}>
      {label && (
        <label for={name} className={styles["label"]}>
          {label ? label : "Label"}
        </label>
      )}
      <div className={isPrefix}>
        <Input
          type={type}
          placeholder={placeholder}
          name={name}
          className={styles["input"]}
        />
        <span className={styles["input-prefix"]}>{prefixText}</span>
      </div>
    </div>
  );
};

export default InputLabel;

InputLabel.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  label: PropTypes.string,
  prefix: PropTypes.boolean,
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
