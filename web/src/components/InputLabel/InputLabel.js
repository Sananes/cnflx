import React from "react";
// import PropTypes from "prop-types";
import Input from "../Input";
import styles from "./InputLabel.module.scss";

const InputLabel = ({ input, meta, label, placeholder, className }) => {
  return (
    <div className={styles["fieldset"]}>
      <div className={styles["label"]}>
        <label htmlFor={input.name}>{label}</label>
      </div>
      <Input
        {...input}
        meta={meta}
        value={input.value}
        placeholder={placeholder}
        type={input.type}
      />
      {meta.touched ? <p className={styles["required"]}>{meta.error}</p> : ""}
    </div>
  );
};

export default InputLabel;

// InputLabel.propTypes = {
//   label: PropTypes.string,
//   labelLink: PropTypes.string,
//   prefix: PropTypes.bool,
//   prefixText: PropTypes.string,
//   placeholder: PropTypes.string,
//   name: PropTypes.string.isRequired
// };

// InputLabel.defaultProps = {
//   type: "text",
//   name: "Input",
//   prefix: false,
//   prefixText: "cnflx.io",
//   placeholder: "Text"
// };
