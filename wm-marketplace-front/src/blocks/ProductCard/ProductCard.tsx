import Heading from "@/components/Heading/Heading.styled";
import {
  DiscountedPrice,
  Image,
  LikeButton,
  Price,
  PricesBlock,
  Status,
  TitleWrapper,
  Wrapper,
} from "./styled";
import { Button } from "@/components/Button/Button.styled";
import { Heart } from "lucide-react";
import { ButtonIcon } from "@/components/ButtonWithIcon/ButtonIcon.styled";
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
  hideLikes?: boolean;
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
      </PricesBlock>
      <LikeButton>
        <ButtonIcon $variation="horizontal" $size="medium">
          <Heart size={24} color="var(--color-neutral-800)" fill="white" />
        </ButtonIcon>
      </LikeButton>
      <Button $size="medium" $variation="primary" $block>
        В корзину
      </Button>
    </Wrapper>
  );
};

export default ProductCard;
