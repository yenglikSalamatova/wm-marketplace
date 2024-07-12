import { PageWrapper } from "@/App.styled";
import Heading from "@/components/Heading/Heading.styled";

import { HelmetProvider, Helmet } from "react-helmet-async";
import { ProductGroupContainer } from "./styled";
import { dummyProducts } from "../dummyProducts";
import { useSelector } from "react-redux";
import { selectFavorites } from "@/features/Favorites/selectors";
import ProductCard from "@/blocks/ProductCard";

const FavoritesPage: React.FC = () => {
  const favoriteProducts = useSelector(selectFavorites);

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Избранное - WM Marketplace</title>
        </Helmet>
      </HelmetProvider>
      <PageWrapper>
        <Heading as="h2">Избранное</Heading>

        <ProductGroupContainer>
          {dummyProducts
            .filter((p) => favoriteProducts.includes(p.id))
            .map((product) => (
              <ProductCard key={product.id} {...product} isLiked={true} />
            ))}
        </ProductGroupContainer>
        {favoriteProducts.length === 0 && <p>Нет избранных товаров</p>}
      </PageWrapper>
    </>
  );
};

export default FavoritesPage;
