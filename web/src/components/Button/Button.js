import React from "react";
import styles from "./Button.module.scss";

type Props = {
  text?: string,
  className?: string
};

const Button = ({ text, className }: Props) => {
  return (
    <button className={className ? className : styles["button"]}>{text}</button>
  );
};

export default Button;
