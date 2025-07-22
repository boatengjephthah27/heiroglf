import {
  FaAmazon,
  FaBitcoin,
  FaDiscord,
  FaFacebook,
  FaFigma,
  FaGoogle,
  FaInstagram,
  FaStripe,
  FaTwitter,
} from "react-icons/fa";
import type { Socials, PageRoute } from "../interfaces/interface";
import type { IconType } from "react-icons";

export const whatYouCanDo: {
  title: string;
  icon: IconType;
  description: string;
}[] = [
  {
    title: "Trade Instantly",
    icon: FaBitcoin,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur dolor nisi distinctio, possimus exercitationem mollitia iure praesentium ea eligendi.",
  },
  {
    title: "Trade Instantly",
    icon: FaBitcoin,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur dolor nisi distinctio, possimus exercitationem mollitia iure praesentium ea eligendi.",
  },
  {
    title: "Trade Instantly",
    icon: FaBitcoin,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur dolor nisi distinctio, possimus exercitationem mollitia iure praesentium ea eligendi.",
  },
  {
    title: "Trade Instantly",
    icon: FaBitcoin,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur dolor nisi distinctio, possimus exercitationem mollitia iure praesentium ea eligendi.",
  },
];

export const clients: { icon: IconType }[] = [
  { icon: FaAmazon },
  { icon: FaGoogle },
  { icon: FaFigma },
  { icon: FaStripe },
  { icon: FaDiscord },
];

export const routePages: PageRoute[] = [
  {
    title: "Home",
    path: "/",
  },

  {
    title: "Service",
    path: "/service",
  },
  {
    title: "Company",
    path: "/company",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];

export const socials: Socials[] = [
  {
    icon: FaFacebook,
    path: "https://www.facebook.com",
  },
  {
    icon: FaTwitter,
    path: "https://www.twitter.com",
  },
  {
    icon: FaInstagram,
    path: "https://www.instagram.com",
  },
];
