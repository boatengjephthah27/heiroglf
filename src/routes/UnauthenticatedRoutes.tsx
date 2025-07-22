import { Outlet } from "react-router-dom";
import PageWrapper from "../layout/PageWrapper";

const UnauthenticatedRoutes = () => {
  return (
    <PageWrapper>
      <Outlet />
    </PageWrapper>
  );
};

export default UnauthenticatedRoutes;
