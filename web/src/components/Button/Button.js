import React from "react";
import styles from "./Button.module.scss";

type Props = {
  text?: string,
  className?: string,
  link?: string
};

const Button = ({ text, className, link, to }: Props) => {
  return (
    <a
      href={link || to}
      className={className ? `${className} button` : styles["button"]}
    >
      {text}
    </a>
  );
};

export default Button;
