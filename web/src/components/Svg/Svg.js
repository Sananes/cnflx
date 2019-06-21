import React from "react";
import PropTypes from "prop-types";
import styles from "./Svg.module.scss";
import { svgs } from "../../constants";

const Svg = ({
  stroke,
  fill,
  className,
  name,
  left,
  strokeLineCap,
  top,
  strokeWidth
}) => (
  <svg
    viewBox={svgs[name].viewBox}
    fill={fill}
    left={left}
    top={top}
    className={className ? className : styles["svg"]}
    strokeWidth={strokeWidth}
    strokeLineCap={strokeLineCap}
  >
    <path d={svgs[name].path} />
  </svg>
);

export default Svg;

Svg.propTypes = {
  stroke: PropTypes.string,
  strokeWidth: PropTypes.number,
  fill: PropTypes.string,
  left: PropTypes.string,
  top: PropTypes.string,
  strokeLineCap: PropTypes.string,
  className: PropTypes.string
};

Svg.defaultProps = {
  stroke: "currentColor",
  fill: "currentColor",
  className: styles["svg"],
  strokeWidth: 2
};
