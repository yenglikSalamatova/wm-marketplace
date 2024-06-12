import styled from "styled-components";

export const ButtonIcon = styled.button`
  cursor: pointer;
  border: none;
  background: none;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  padding: 10px;

  &:hover {
    svg {
      transition: all 0.3s;
      stroke: var(--color-primary-500);
    }
  }
`;
