// @flow
import React from "react";
import Button from "../Button/Button";
import styles from "./Signup.module.scss";

type Props = {
  className: string,
  notice: string,
  button: string
};

const Signup = ({ className, notice, button, children }: Props) => {
  return (
    <div className={`${className} ${styles["signup"]}`}>
      <div className={styles["signup__wrapper"]}>
        <input
          className={styles["signup__input"]}
          placeholder="Enter work email"
        />
        {/* <span className={styles["signup_prefix"]}>.cnflx.io</span> */}
      </div>
      <Button
        text={button || "Try it Free"}
        className={styles["signup__button"]}
      />
      {notice ? (
        <div className={styles["signup__notice"]}>
          <p>{notice}</p>
        </div>
      ) : (
        ""
      )}
      {children}
    </div>
  );
};

export default Signup;
