import { Suspense } from "react";
import PublicRoutes from "./routes/PublicRoutes";
import PrivateRoutes from "./routes/PrivateRoutes";

import Header from "./features/Header";
import { AppStyles, Footer } from "./App.styled";

const App = () => {
  return (
    <>
      {/* Global styles  */}
      <AppStyles />

      <Header />
      <Suspense fallback="loading...">
        <PublicRoutes />
        {/* <PrivateRoutes /> */}
      </Suspense>
      <Footer>
        <div>@WM Маркетплейс</div>
      </Footer>
    </>
  );
};

export default App;
