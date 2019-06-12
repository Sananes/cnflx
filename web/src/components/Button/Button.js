import React from "react";
import styles from "./Button.module.scss";

type Props = {
  text: string
};

const Button = ({ text }: Props) => {
  return <Button className={styles["button"]}>{text}</Button>;
};

export default Button;
