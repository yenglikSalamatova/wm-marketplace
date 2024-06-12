import styled, { createGlobalStyle } from "styled-components";
import colors from "./consts/colors";
import { FOOTER_HEIGHT, HEADER_HEIGHT } from "./consts";

export const AppStyles = createGlobalStyle`
    body {
        font-family: 'Roboto', sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-size: 14px;
        color: #5e5873;
        min-width: 320px;
    }

    /*
  1. Use a more-intuitive box-sizing model.
*/
*, *::before, *::after {
  box-sizing: border-box;
}
/*
  2. Remove default margin
*/
* {
  margin: 0;
}
/*
  Typographic tweaks!
  3. Add accessible line-height
  4. Improve text rendering
*/
body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}
/*
  5. Improve media defaults
*/
img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}
/*
  6. Remove built-in form typography styles
*/
input, button, textarea, select {
  font: inherit;
}
/*
  7. Avoid text overflows
*/
p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}
/*
  8. Create a root stacking context
*/
#root, #__next {
  isolation: isolate;
}
`
export const Footer = styled.footer`
    height: ${FOOTER_HEIGHT}px;
    padding: 20px;
    background-color: ${colors.primary};
    color: #fff;
    display: flex;
    align-items: center;
    font-size: 14px;

    >  :last-child {
        cursor: pointer;
    }
`;

export const PageWrapper = styled.div`
    padding: 20px;
    min-height: calc(100vh - ${HEADER_HEIGHT}px - ${FOOTER_HEIGHT}px)
`;