import { HelmetProvider, Helmet } from "react-helmet-async";
import { PageWrapper } from "@/App.styled";
import { ProductGroup, ProductGroupContainer } from "./styled";
import { dummyProducts } from "../dummyProducts";
import ProductCard from "@/blocks/ProductCard";
import Heading from "@/components/Heading.styled";

const HomePage: React.FC = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Home Page - WM Marketplace</title>
        </Helmet>
      </HelmetProvider>

      <PageWrapper>
        <ProductGroup>
          <Heading as="h2">Рекомендуемые товары</Heading>
          <ProductGroupContainer>
            {dummyProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </ProductGroupContainer>
        </ProductGroup>
      </PageWrapper>
    </>
  );
};

export default HomePage;
