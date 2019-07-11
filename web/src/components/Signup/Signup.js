// @flow
import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import Button from "../Button/Button";
import styles from "./Signup.module.scss";

type Props = {
  className: string,
  notice: string,
  button: string
};

const Signup = ({ className, notice, button, children }: Props) => {
  const [state, setState] = useContext(GlobalContext);

  const handleSubmit = () => {};
  return (
    <div className={`${className} ${styles["signup"]}`}>
      <div className={styles["signup__wrapper"]}>
        <input
          onChange={e => setState({ email: e.target.value })}
          value={state.email}
          className={styles["signup__input"]}
          placeholder="Enter work email"
        />
        {/* <span className={styles["signup_prefix"]}>.cnflx.io</span> */}
      </div>
      <Button
        to="/signup"
        onClick={() => handleSubmit}
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
