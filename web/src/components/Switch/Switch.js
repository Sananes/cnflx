import React from "react";
import styles from "./Switch.module.scss";

const Switch = props => {
  const { toggle } = props;
  return (
    <label className={`${styles["label"]} ${styles["toggle"]}`}>
      <input
        onChange={props.toggle}
        type="checkbox"
        className={styles["toggle_input"]}
      />
      <div className={styles["toggle-control"]} />
    </label>
  );
};

export default Switch;
