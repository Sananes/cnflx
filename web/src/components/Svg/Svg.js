// @flow
import React from "react";
import styles from "./Svg.module.scss";

type Props = {
  icon: {
    viewBox: string,
    path: string,
    strokeWidth: number
  }
};

const Svg = ({ icon }: Props) => (
  <svg
    className={styles["svg"]}
    viewBox={icon.viewBox}
    stroke-width={icon.strokeWidth}
  >
    <path d={icon.path} />
  </svg>
);

export default Svg;
