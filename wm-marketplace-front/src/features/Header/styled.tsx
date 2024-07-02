import styled from "styled-components";

export const Wrapper = styled.header`
  padding: 0 20px;
  display: flex;
  align-items: center;
  transition: margin 0.2s ease-out;
  /* background-color: var(--color-primary-500); */
  height: var(--header-height);
  z-index: var(--z-index-1);
  color: var(----color-neutral-50);
  border: 1px solid var(--color-neutral-300);
  justify-content: space-between;
  gap: 20px;
`;

export const Logo = styled.span`
  font-size: 22px;
  font-weight: 700;
  color: var(--color-neutral-900);
`;

export const Categories = styled.button`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  cursor: pointer;
  list-style: none;
  padding: 10px;
  background-color: transparent;
  border: none;
  border-bottom: 2px solid transparent;

  &:hover {
    color: var(--color-neutral-900);
    border-bottom: 2px solid var(--color-primary-500);
  }
`;

export const SearchWrapper = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  border-left: 1px solid var(--color-neutral-300);
  border-right: 1px solid var(--color-neutral-300);
  padding: 0 20px;
`;

export const Search = styled.input`
  border: none;
  width: 100%;
  height: 100%;

  &:focus {
    outline: none;
  }
`;

export const HeaderRight = styled.div`
  padding: 10px 0;
  display: flex;
  align-items: center;
`;
