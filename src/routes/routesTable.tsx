import type { Route } from "../interfaces/interface";
import Home from "../pages/Home";
import Service from "../pages/Service";
import Company from "../pages/Company";
import Contact from "../pages/Contact";

export const UNAUTH_ROUTES_TABLE: Route[] = [
  {
    path: "/",
    element: Home,
  },
  {
    path: "/service",
    element: Service,
  },
  {
    path: "/company",
    element: Company,
  },
  {
    path: "/contact",
    element: Contact,
  },
];
