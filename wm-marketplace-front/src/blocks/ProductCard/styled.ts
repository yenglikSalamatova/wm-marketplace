import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  margin-top: 25px;
  width: 240px;
  padding: 0 10px 10px;
  z-index: var(--z-index-1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 5px;
`;

interface ProductStatusProps {
  $status?: "discounted" | "promotion";
}

const statuses = {
  discounted: "var(--color-error-500)",
  promotion: "var(--color-success-500)",
};

export const Status = styled.div<ProductStatusProps>`
  background-color: ${(props) =>
    props.$status ? statuses[props.$status] : "transparent"};
  padding: 5px 10px;
  color: var(--color-neutral-50);
  border-radius: 5px;
  position: absolute;
  top: 10px;
  left: -10px;
  z-index: var(--z-index-2);
  font-size: 14px;
  font-weight: 700;
`;

export const TitleWrapper = styled.div`
  margin-top: 10px;
  min-height: 50px;

  > h4 {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
`;

export const PricesBlock = styled.div`
  margin-top: 5px;
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: space-between;
`;

export const Price = styled.span`
  display: inline-block;
  font-size: 18px;
  font-weight: 700;
  color: var(--text-color);
`;

export const DiscountedPrice = styled.span`
  text-decoration: line-through;
  color: var(--text-color-secondary);
`;
