import { Suspense } from "react";
import PublicRoutes from "./routes/PublicRoutes";
import PrivateRoutes from "./routes/PrivateRoutes";
import { BrowserRouter } from "react-router-dom";
import Header from "./features/Header";
import { AppStyles, Footer } from "./App.styled";

const App = () => {
  return (
    <BrowserRouter>
      <AppStyles />

      <Header />
      <Suspense fallback="loading...">
        <PublicRoutes />
        {/* <PrivateRoutes /> */}
      </Suspense>
      <Footer>
        <div>@WM Маркетплейс</div>
      </Footer>
    </BrowserRouter>
  );
};

export default App;
