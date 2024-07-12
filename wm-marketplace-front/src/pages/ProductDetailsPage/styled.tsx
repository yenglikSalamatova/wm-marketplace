import styled from "styled-components";

export const Price = styled.span`
  font-size: 18px;
  font-weight: 700;
`;

export const PriceLined = styled.span`
  color: var(--text-color-secondary);
  font-size: 18px;
  font-weight: 400;
  text-decoration: line-through;
  margin-left: 15px;
`;

export const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 20px auto;
  gap: 20px;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

export const ProductRight = styled.div`
  flex: 1;
  min-width: 300px;
`;

export const ProductLeft = styled.div`
  flex: 1;
  min-width: 300px;
`;

export const ProductDesc = styled.p`
  font-size: 18px;
  margin-top: 20px;
`;
