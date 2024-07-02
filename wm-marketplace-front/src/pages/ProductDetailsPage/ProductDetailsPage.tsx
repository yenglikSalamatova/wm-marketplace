import { PageWrapper } from "@/App.styled";
import { HelmetProvider, Helmet } from "react-helmet-async";

const ProductDetailsPage = () => {
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>Product Details - WM Marketplace</title>
        </Helmet>
      </HelmetProvider>
      <PageWrapper>
        <h1>Product Details Page</h1>
      </PageWrapper>
    </div>
  );
};

export default ProductDetailsPage;
