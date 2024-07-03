import styled, { css } from "styled-components";

const sizes = {
  small: css`
    font-size: 12px;
    padding: 8px 16px;
    font-weight: 600;
    text-align: center;
    word-wrap: break-word;
  `,
  medium: css`
    font-size: 14px;
    padding: 12px 16px;
    font-weight: 500;
  `,
  large: css`
    font-size: 16px;
    padding: 12px 24px;
    font-weight: 500;
  `,
};

const variations = {
  primary: css`
    color: var(--color-neutral-50);
    background-color: var(--color-primary-500);

    &:hover {
      background-color: var(--color-primary-600);
    }
  `,
  secondary: css`
    color: var(--color-neutral-50);
    background: var(--color-secondary-500);

    &:hover {
      background-color: var(--color-secondary-600);
    }
  `,
};

interface ButtonProps {
  $size: "small" | "medium" | "large";
  $variation: "primary" | "secondary";
  $block?: boolean;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

export const Button = styled.button<ButtonProps>`
  cursor: pointer;
  border: none;
  border-radius: var(--border-radius-2xl);
  box-shadow: var(--shadow-sm);
  transition: background-color 0.3s;
  ${(props) => sizes[props.$size]}
  ${(props) => variations[props.$variation]}
  ${(props) => (props.$block ? "width: 100%;" : "width: fit-content;")}
`;

Button.defaultProps = {
  $size: "medium",
  $variation: "primary",
};
