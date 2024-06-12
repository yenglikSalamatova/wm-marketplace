import { HelmetProvider, Helmet } from "react-helmet-async";
import { PageWrapper } from "@/App.styled";

const HomePage: React.FC = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Home Page - WM Marketplace</title>
        </Helmet>
      </HelmetProvider>

      <PageWrapper>
        <h2>Welcome to the WM Marketplace!</h2>
        <p>Buy and sell items with ease.</p>
      </PageWrapper>
    </>
  );
};

export default HomePage;
