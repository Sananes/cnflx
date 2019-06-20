import React from "react";
import styles from "./Switch.module.scss";

const Switch = ({}) => (
  <label className={`${styles["label"]} ${styles["toggle"]}`}>
    <input type="checkbox" className={styles["toggle_input"]} />
    <div className={styles["toggle-control"]} />
  </label>
);

export default Switch;
