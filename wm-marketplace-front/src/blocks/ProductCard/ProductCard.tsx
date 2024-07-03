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
import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { setFavorite, unsetFavorite } from "@/features/Favorites/reducer";
import { T_Dispatch } from "@/store/types";

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
  isLiked?: boolean;
}

const ProductCard: React.FC<I_ProductCardProps> = ({
  id,
  slug,
  imgSrc,
  title,
  priceRegular,
  priceDiscounted,
  top,
  isLiked,
}) => {
  console.log(
    "ProductCard",
    id,
    slug,
    imgSrc,
    title,
    priceRegular,
    priceDiscounted,
    top,
    isLiked
  );

  const dispatch: T_Dispatch = useDispatch();

  const handleFavourite = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      dispatch(!isLiked ? setFavorite(id) : unsetFavorite(id));
    },
    [dispatch, isLiked, id]
  );

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
        <ButtonIcon
          $variation="horizontal"
          $size="medium"
          $active={isLiked}
          $color="var(--color-error-500)"
          onClick={handleFavourite}
        >
          <Heart size={24} color="var(--color-neutral-800)" fill="white" />
        </ButtonIcon>
      </LikeButton>
      <Button $size="small" $variation="primary" $block>
        В корзину
      </Button>
    </Wrapper>
  );
};

export default ProductCard;
