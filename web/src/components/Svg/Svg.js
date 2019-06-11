import React from "react";
import PropTypes from "prop-types";
import styles from "./Svg.module.scss";
import { svgs } from "../../constants";

const Svg = ({ stroke, fill, width, name, left, top, strokeWidth }) => (
  <svg
    viewBox={svgs[name].viewBox}
    stroke={stroke}
    fill={fill}
    width={`${width}px`}
    left={left}
    top={top}
    className={styles["svg"]}
    strokeWidth={strokeWidth}
  >
    <path d={svgs[name].path} />
  </svg>
);

export default Svg;

Svg.propTypes = {
  icon: {
    stroke: PropTypes.string,
    strokeWidth: PropTypes.number,
    fill: PropTypes.string,
    width: PropTypes.number,
    left: PropTypes.string,
    top: PropTypes.string,
    className: PropTypes.string
  }
};

Svg.defaultProps = {
  icon: {
    stroke: "currentColor",
    width: 24,
    fill: "none",
    className: "icon",
    strokeWidth: 2
  }
};
