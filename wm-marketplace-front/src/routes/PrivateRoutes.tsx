import { lazy } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { paths, checkPathMatch } from "./helpers";

const AccountSettingsPage = lazy(() => import("@pages/AccountSettingsPage"));

const PublicRoutes: React.FC = () => {
  const location = useLocation();

  const isMatch = checkPathMatch(location.pathname, paths);

  return (
    <Routes>
      <Route path={paths.accountSettings} element={<AccountSettingsPage />} />
      <Route
        path="*"
        element={!isMatch ? <Navigate to={paths.accountSettings} /> : null}
      />
    </Routes>
  );
};

export default PublicRoutes;
