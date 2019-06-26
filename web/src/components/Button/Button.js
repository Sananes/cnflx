import React from "react";
import styles from "./Button.module.scss";

type Props = {
  text?: string,
  className?: string,
  link?: string
};

const Button = ({ text, className, link }: Props) => {
  return (
    <a
      href={link}
      className={className ? `${className} button` : styles["button"]}
    >
      {text}
    </a>
  );
};

export default Button;
