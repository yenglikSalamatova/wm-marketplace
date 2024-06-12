import Heading from "@/components/Heading.styled";
import {
  DiscountedPrice,
  Image,
  Price,
  PricesBlock,
  Status,
  TitleWrapper,
  Wrapper,
} from "./styled";
import { Button } from "@/components/Button.styled";
import { Heart } from "lucide-react";
import { ButtonIcon } from "@/components/ButtonIcon.styled";
import { Link } from "react-router-dom";

interface I_ProductCardProps {
  id: number;
  imgSrc: string;
  title: string;
  priceRegular: number;
  priceDiscounted?: number;
  desc: string;
  top?: boolean;
  slug?: string;
}

const ProductCard: React.FC<I_ProductCardProps> = ({
  id,
  slug,
  imgSrc,
  title,
  priceRegular,
  priceDiscounted,
  top,
}) => {
  return (
    <Wrapper>
      <Link to={`/product/${slug || id}`}>
        <Image src={imgSrc} alt={title} />
      </Link>
      {priceDiscounted && <Status $status="discounted">Скидка</Status>}
      {top && <Status $status="promotion">Популярный товар</Status>}
      <Link to={`/product/${slug || id}`}>
        <TitleWrapper>
          <Heading as="h4">{title}</Heading>
        </TitleWrapper>
      </Link>

      <PricesBlock>
        <Price>{priceDiscounted ? priceDiscounted : priceRegular} тг.</Price>
        {priceDiscounted && (
          <DiscountedPrice>{priceRegular} тг.</DiscountedPrice>
        )}
        <ButtonIcon>
          <Heart size={24} />
        </ButtonIcon>
      </PricesBlock>
      <Button $size="medium" $variation="primary">
        В корзину
      </Button>
    </Wrapper>
  );
};

export default ProductCard;
