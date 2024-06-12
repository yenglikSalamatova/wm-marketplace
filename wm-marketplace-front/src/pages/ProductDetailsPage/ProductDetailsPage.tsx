import { HelmetProvider, Helmet } from "react-helmet-async";

const ProductDetailsPage = () => {
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>Product Details - WM Marketplace</title>
        </Helmet>
      </HelmetProvider>
      <h1>Product Details Page</h1>
    </div>
  );
};

export default ProductDetailsPage;
