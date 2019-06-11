// @flow
import React from "react";
import PropTypes from "prop-types";
import styles from "./Icon.module.scss";
import { icons } from "../../constants";

const Icon = ({ stroke, fill, width, name, left, top, strokeWidth }) => (
  <svg
    viewBox={icons[name].viewBox}
    stroke={stroke}
    fill={fill}
    width={`${width}px`}
    left={left}
    top={top}
    className={styles["svg"]}
    strokeWidth={strokeWidth}
  >
    <path d={icons[name].path} />
  </svg>
);

export default Icon;

Icon.propTypes = {
  stroke: PropTypes.string,
  strokeWidth: PropTypes.number,
  fill: PropTypes.string,
  width: PropTypes.number,
  left: PropTypes.string,
  top: PropTypes.string,
  className: PropTypes.string
};

Icon.defaultProps = {
  stroke: "currentColor",
  width: 24,
  fill: "none",
  className: "icon",
  strokeWidth: 2
};
