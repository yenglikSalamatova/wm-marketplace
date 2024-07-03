import { lazy } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { paths, checkPathMatch } from "./helpers";
import FavoritesPage from "@/pages/FavoritesPage";

const HomePage = lazy(() => import("@pages/HomePage"));
const ProductDetailsPage = lazy(() => import("@pages/ProductDetailsPage"));

const PublicRoutes: React.FC = () => {
  const location = useLocation();

  const isMatch = checkPathMatch(location.pathname, paths);

  return (
    <Routes>
      <Route path={paths.home} element={<HomePage />} />
      <Route path={paths.productDetails} element={<ProductDetailsPage />} />
      <Route path={paths.login} element={<div>Login Page</div>} />
      <Route path={paths.favorites} element={<FavoritesPage />} />
      <Route
        path="*"
        element={!isMatch ? <Navigate to={paths.home} /> : null}
      />
    </Routes>
  );
};

export default PublicRoutes;
