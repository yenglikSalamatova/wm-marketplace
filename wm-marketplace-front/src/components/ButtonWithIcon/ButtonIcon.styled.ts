import styled, { css } from "styled-components";

interface ButtonIconProps {
  $size?: "small" | "medium" | "large";
  $variation?: "vertical" | "horizontal";
  $notificationCount?: number;
  $active?: boolean;
  $color?: string;
  $disabled?: boolean;
}

const sizes = {
  small: css`
    font-size: 12px;
    padding: 10px 12px;
    font-weight: 400;
    text-align: center;
    word-wrap: break-word;
  `,
  medium: css`
    font-size: 14px;
    padding: 12px 16px;
    font-weight: 400;
  `,
  large: css`
    font-size: 16px;
    padding: 12px 24px;
    font-weight: 400;
  `,
};

export const ButtonIcon = styled.button<ButtonIconProps>`
  cursor: pointer;
  border: none;
  background: none;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  gap: 8px;
  position: relative;

  ${(props) =>
    props.$disabled &&
    css`
      pointer-events: none;
      opacity: 0.5;
    `}

  svg {
    transition: all 0.3s;
    fill: ${(props) =>
      props.$active ? props.$color || "var(--color-primary-500)" : "none"};
    stroke: ${(props) => props.$color || "var(--color-neutral-400)"};
  }

  ${(props) => sizes[props.$size || "medium"]}
  ${(props) =>
    props.$variation === "vertical"
      ? "flex-direction: column;"
      : "flex-direction: row;"}
  ${(props) => {
    if (props.$notificationCount) {
      return css`
        &::after {
          content: "${props.$notificationCount}";
          width: 17px;
          height: 17px;
          position: absolute;
          top: 5px;
          right: 30px;
          background-color: var(--color-error-500);
          color: #fff;
          font-size: 10px;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
        }
      `;
    }
  }}

&:hover {
    svg {
      stroke: ${(props) => props.$color || "var(--color-primary-500)"};
      ${(props) =>
        props.$active &&
        css`
          stroke: ${props.$color ? props.$color : "var(--color-primary-700)"};
          // Затемнение иконки при наведении
          filter: brightness(0.9);
        `}
    }
  }
`;

ButtonIcon.defaultProps = {
  $size: "medium",
  $variation: "vertical",
};
