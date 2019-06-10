// @flow
import { ICONS } from "../constants";

const getIcon = (name: string) => {
  let icon;

  switch (name) {
    case "twitter":
      icon = ICONS.TWITTER;
      break;
    case "github":
      icon = ICONS.GITHUB;
      break;
    case "vkontakte":
      icon = ICONS.VKONTAKTE;
      break;
    case "telegram":
      icon = ICONS.TELEGRAM;
      break;
    case "email":
      icon = ICONS.EMAIL;
      break;
    case "rss":
      icon = ICONS.RSS;
      break;
    case "stripe":
      icon = ICONS.STRIPE;
      break;
    case "silverfin":
      icon = ICONS.SILVERFIN;
      break;
    case "marvel":
      icon = ICONS.MARVEL;
      break;
    case "hopper":
      icon = ICONS.HOPPER;
      break;
    case "lightspeed":
      icon = ICONS.LIGHTSPEED;
      break;
    default:
      icon = {};
      break;
  }

  return icon;
};

export default getIcon;
