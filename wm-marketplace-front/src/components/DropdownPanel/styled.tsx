import styled from "styled-components";

interface I_DropdownWrapperProps {
  $position: "left" | "right";
}

export const Wrapper = styled.div`
  position: relative;
  display: inline-block;
`;

export const DropdownWrapper = styled.div<I_DropdownWrapperProps>`
  width: 200px;
  position: absolute;
  top: 100%;
  background-color: var(--color-neutral-50);
  border-radius: 4px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 100;
  display: flex;
  flex-direction: column;
  gap: 8px;
  ${({ $position }) => ($position === "left" ? "left: 0;" : "right: 0;")}

  * {
    padding: 10px 20px;

    &:hover {
      background-color: var(--color-neutral-200);
    }
  }
`;
