import { Suspense } from "react";
import PublicRoutes from "./routes/PublicRoutes";
import PrivateRoutes from "./routes/PrivateRoutes";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback="loading...">
        <PublicRoutes />
        {/* <PrivateRoutes /> */}
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
