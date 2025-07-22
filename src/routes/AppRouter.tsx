import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UnauthenticatedRoutes from "./UnauthenticatedRoutes";
import { UNAUTH_ROUTES_TABLE } from "./routesTable";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route element={<UnauthenticatedRoutes />}>
          {UNAUTH_ROUTES_TABLE.map((route) => {
            const { path } = route;
            return <Route key={path} path={path} element={<route.element />} />;
          })}
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
