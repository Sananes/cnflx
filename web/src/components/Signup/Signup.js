// @flow
import React, { useContext } from "react";
import { navigate } from "gatsby";
import { GlobalContext } from "../../context/GlobalContext";
import styles from "./Signup.module.scss";

type Props = {
  className: string,
  notice: string,
  button: string
};

const Signup = ({ className, notice, button, children }: Props) => {
  const [state, setState] = useContext(GlobalContext);

  const handleSubmit = e => {
    e.preventDefault();
    navigate("/signup");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`${className} ${styles["signup"]}`}
    >
      <div className={styles["signup__wrapper"]}>
        <input
          onChange={e => setState({ email: e.target.value })}
          value={state.email}
          className={styles["signup__input"]}
          placeholder="Enter work email"
        />
      </div>
      <button onClick={() => handleSubmit} className={styles["signup__button"]}>
        Try it Free
      </button>
      {notice ? (
        <div className={styles["signup__notice"]}>
          <p>{notice}</p>
        </div>
      ) : (
        ""
      )}
      {children}
    </form>
  );
};

export default Signup;
