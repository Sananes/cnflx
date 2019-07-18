import React from "react";
import Signup from "../../../components/Signup";
import styles from "./Signup.module.scss";

const SignupIndex = () => {
  return (
    <section className={styles["signup"]}>
      <div className={styles["signup__inner"]}>
        <h3 className={styles["signup__title"]}>Start managing feedback</h3>
        <p className={styles["signup__subtitle"]}>
          Free 14 day trial · No credit card&nbsp;required
        </p>
        <Signup className={styles["signup__wrapper"]} />
      </div>
    </section>
  );
};

export default SignupIndex;
