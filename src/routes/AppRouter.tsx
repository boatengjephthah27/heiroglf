import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import UnauthenticatedRoutes from "./UnauthenticatedRoutes";
import { UNAUTH_ROUTES_TABLE } from "./routesTable";
import ScrollToTop from "../components/ScrollToTop";
import { AnimatePresence } from "framer-motion";

const AppRouter = () => {
  return (
    <Router>
      <ScrollToTop />
      <RouterWrapper />
    </Router>
  );
};

const RouterWrapper = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode='wait'>
      <Routes key={location.pathname} location={location}>
        <Route element={<UnauthenticatedRoutes />}>
          {UNAUTH_ROUTES_TABLE.map((route) => {
            const { path } = route;
            return <Route key={path} path={path} element={<route.element />} />;
          })}
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default AppRouter;
