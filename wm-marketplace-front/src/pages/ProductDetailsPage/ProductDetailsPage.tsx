import { PageWrapper } from "@/App.styled";
import { useEffect, useState } from "react";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { I_ProductDetails } from "../types";
import { dummyProducts } from "../dummyProducts";
import Heading from "@/components/Heading/Heading.styled";
import {
  Image,
  Price,
  PriceLined,
  ProductDesc,
  ProductLeft,
  ProductRight,
  ProductWrapper,
} from "./styled";

const ProductDetailsPage = () => {
  const params = useParams();

  const dispatch = useDispatch();

  const [productDetails, setDroductDetails] = useState<I_ProductDetails>();

  useEffect(() => {
    const foundedProduct = dummyProducts?.find((product) =>
      [String(product.id), product.slug].includes(params.idOrSlug)
    );
    if (foundedProduct) setDroductDetails(foundedProduct);
  }, [params.idOrSlug]);

  if (!productDetails)
    return (
      <PageWrapper>
        <p>Продукт не найден</p>
      </PageWrapper>
    );

  const { id, title, imgSrc, priceRegular, priceDiscounted, desc } =
    productDetails;

  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>Product Details - WM Marketplace</title>
        </Helmet>
      </HelmetProvider>
      <PageWrapper>
        <ProductWrapper>
          <ProductLeft>
            <Image src={imgSrc} alt={title} />
          </ProductLeft>

          <ProductRight>
            <Heading as="h1">{title}</Heading>
            {priceDiscounted ? (
              <>
                <Price>{priceDiscounted} тг.</Price>
                <PriceLined>{priceRegular} тг.</PriceLined>
              </>
            ) : (
              <Price>{priceRegular} тг.</Price>
            )}
            <ProductDesc>{desc}</ProductDesc>
          </ProductRight>
        </ProductWrapper>
      </PageWrapper>
    </div>
  );
};

export default ProductDetailsPage;
