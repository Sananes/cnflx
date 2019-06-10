// @flow
import { SVG } from "../constants";

const getSvg = (name: string) => {
  let icon;

  switch (name) {
    case "twitter":
      icon = SVG.TWITTER;
      break;
    case "logo":
      icon = SVG.LOGO;
      break;
    case "hero-pattern":
      icon = SVG.HEROPATTERN;
      break;
    default:
      icon = {};
      break;
  }

  return icon;
};

export default getSvg;
