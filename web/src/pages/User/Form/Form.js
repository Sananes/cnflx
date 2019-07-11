import React from "react";
import styles from "./Form.module.scss";

type Props = {
  children: React.Node
};
const FormUser = ({ onSubmit, children }: Props) => {
  return (
    <form onSubmit={onSubmit} className={styles["form"]}>
      {children}
    </form>
  );
};

export default FormUser;
