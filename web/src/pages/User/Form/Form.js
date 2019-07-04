import React from "react";
import styles from "./Form.module.scss";

type Props = {
  children: React.Node
};
const FormUser = ({ children, validations }: Props) => {
  return <form className={styles["form"]}>{children}</form>;
};

export default FormUser;
