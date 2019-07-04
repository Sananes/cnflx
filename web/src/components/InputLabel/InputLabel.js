import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import Input from "../Input";
import styles from "./InputLabel.module.scss";

const InputLabel = ({
  type,
  placeholder,
  name,
  label,
  helper,
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
        <label for={name} className={styles["label"]}>
          {label && <span>{label}</span>}
          {helper && helperLink && (
            <Link to={helperLink} className={styles["label--link"]}>
              {helper}
            </Link>
          )}
        </label>
      )}
      <div className={isPrefix}>
        <Input
          type={type}
          placeholder={placeholder}
          name={name}
          className={styles["input"]}
        />
        {prefix && <span className={styles["input-prefix"]}>{prefixText}</span>}
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
