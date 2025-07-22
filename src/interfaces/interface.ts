import type { IconType } from "react-icons";

export interface Route {
  path: string;
  element: React.ComponentType;
  children?: Route[];
}

export interface Socials {
  icon: IconType;
  path: string;
}

export interface PageRoute {
  title: string;
  path: string;
}
