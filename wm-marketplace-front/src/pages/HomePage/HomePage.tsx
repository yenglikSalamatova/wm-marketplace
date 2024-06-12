import { HelmetProvider, Helmet } from "react-helmet-async";
import { TestDiv } from "./styled";

const HomePage: React.FC = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Home Page - WM Marketplace</title>
        </Helmet>
      </HelmetProvider>

      <TestDiv>
        <h2>Welcome to the WM Marketplace!</h2>
        <p>Buy and sell items with ease.</p>
      </TestDiv>
    </>
  );
};

export default HomePage;
