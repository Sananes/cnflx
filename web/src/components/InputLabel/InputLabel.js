import React from "react";
import PropTypes from "prop-types";
import Validate from "react-validate-form";
import { Link } from "gatsby";
import Input from "../Input";
import styles from "./InputLabel.module.scss";

const InputLabel = ({
  type,
  placeholder,
  name,
  validations,
  label,
  helper,
  required,
  helperLink,
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
        <label htmlFor={name} className={styles["label"]}>
          {label && <span>{label}</span>}
          {helper && helperLink && (
            <Link to={helperLink} className={styles["label--link"]}>
              {helper}
            </Link>
          )}
        </label>
      )}
      <div className={isPrefix}>
        <Validate validations={validations}>
          {({ validate, errorMessages }) => (
            <React.Fragment>
              <Input
                type={type}
                onChange={validate}
                placeholder={placeholder}
                id={name}
                name={name}
                required={required}
                className={styles["input"]}
              />
              {prefix && (
                <span className={styles["input-prefix"]}>{prefixText}</span>
              )}
            </React.Fragment>
          )}
        </Validate>
      </div>
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
