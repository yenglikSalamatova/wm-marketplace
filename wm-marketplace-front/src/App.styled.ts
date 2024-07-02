import styled, { createGlobalStyle } from "styled-components";

export const AppStyles = createGlobalStyle`
:root {
 /* Primary Colors */
 --color-primary-50: #cfdaed;
  --color-primary-100: #b7c8e3;
  --color-primary-200: #9fb5da;
  --color-primary-300: #6e90c8;
  --color-primary-400: #3e6bb5;
  --color-primary-500: #0E46A3;
  --color-primary-600: #0b3882;
  --color-primary-700: #0a3172;
  --color-primary-800: #072352;
  --color-primary-900: #041531;

  /* Neutral Colors */
  --color-neutral-50: #FFF;
  --color-neutral-100: #F5F5F5;
  --color-neutral-200: #EEEEEE;
  --color-neutral-300: #E0E0E0;
  --color-neutral-400: #BDBDBD;
  --color-neutral-500: #9E9E9E;
  --color-neutral-600: #757575;
  --color-neutral-700: #616161;
  --color-neutral-800: #424242;
  --color-neutral-900: #212121;



  /* Additional Colors for Success, Warning, and Error */
  --color-success-500: #4CAF50;
  --color-warning-500: #FFEB3B;
  --color-error-500: #F44336;

  /* Background and Text Colors */
  --background-color: #FFFFFF;
  --text-color: #212121;
  --text-color-secondary: #757575;
  --border-color: #E0E0E0;

  /* Shadows */
  --shadow-xs: 0px 2px 4px rgba(0, 0, 0, 0.05);
  --shadow-sm: 0px 4px 8px rgba(0, 0, 0, 0.08);
  --shadow-md: 0px 8px 16px rgba(0, 0, 0, 0.12);

  /* Border Radius */
  --border-radius-sm: 4px;
  --border-radius-md: 8px;
  --border-radius-lg: 12px;
  --border-radius-xl: 16px;
  --border-radius-2xl: 20px;

  /* Z-Index Levels */
  --z-index-1: 1
  --z-index-2: 10;
  --z-index-3: 100;
  --z-index-4: 500;
  --z-index-5: 1000;
  --z-index-6: 1000;


  /* Header and footer height */
  --header-height: 70px;
  --footer-height: 40px;
}


  body {
        font-family: 'Rubik' ;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-size: 14px;
        color: #5e5873;
        min-width: 320px;
  }


*, *::before, *::after {
  box-sizing: border-box;
}

* {
  margin: 0;
}

body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}

img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}

input, button, textarea, select {
  font: inherit;
}

p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}

a {
  color: inherit;
  text-decoration: none;
}
/*
  8. Create a root stacking context
*/
#root, #__next {
  isolation: isolate;
}
`;
export const Footer = styled.footer`
  height: var(--footer-height);
  padding: 20px;
  background-color: var(--color-primary-500);
  color: #fff;
  display: flex;
  align-items: center;
  font-size: 14px;

  > :last-child {
    cursor: pointer;
  }
`;

export const PageWrapper = styled.div`
  padding: 20px;
  min-height: calc(100vh - var(--header-height) - var(--footer-height));
`;
