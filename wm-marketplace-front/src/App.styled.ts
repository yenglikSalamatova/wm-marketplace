import styled, { createGlobalStyle } from "styled-components";

export const AppStyles = createGlobalStyle`
:root {
  /* Primary Colors */
  --color-primary-50: #E3F2FD;
  --color-primary-100: #BBDEFB;
  --color-primary-200: #90CAF9;
  --color-primary-300: #64B5F6;
  --color-primary-400: #42A5F5;
  --color-primary-500: #2196F3;
  --color-primary-600: #1E88E5;
  --color-primary-700: #1976D2;
  --color-primary-800: #1565C0;
  --color-primary-900: #0D47A1;

  /* Secondary Colors */
  --color-secondary-50: #FCE4EC;
  --color-secondary-100: #F8BBD0;
  --color-secondary-200: #F48FB1;
  --color-secondary-300: #F06292;
  --color-secondary-400: #EC407A;
  --color-secondary-500: #E91E63;
  --color-secondary-600: #D81B60;
  --color-secondary-700: #C2185B;
  --color-secondary-800: #AD1457;
  --color-secondary-900: #880E4F;

  /* Neutral Colors */
  --color-neutral-50: #FAFAFA;
  --color-neutral-100: #F5F5F5;
  --color-neutral-200: #EEEEEE;
  --color-neutral-300: #E0E0E0;
  --color-neutral-400: #BDBDBD;
  --color-neutral-500: #9E9E9E;
  --color-neutral-600: #757575;
  --color-neutral-700: #616161;
  --color-neutral-800: #424242;
  --color-neutral-900: #212121;

  /* Accent Colors */
  --color-accent-50: #FFF3E0;
  --color-accent-100: #FFE0B2;
  --color-accent-200: #FFCC80;
  --color-accent-300: #FFB74D;
  --color-accent-400: #FFA726;
  --color-accent-500: #FF9800;
  --color-accent-600: #FB8C00;
  --color-accent-700: #F57C00;
  --color-accent-800: #EF6C00;
  --color-accent-900: #E65100;

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

  /* Z-Index Levels */
  --z-index-1: 1
  --z-index-2: 10;
  --z-index-3: 100;
  --z-index-4: 500;
  --z-index-5: 1000;
  --z-index-6: 1000;


  /* Header and footer height */
  --header-height: 60px;
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
