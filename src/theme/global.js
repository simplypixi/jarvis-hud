import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html.unsupported {
    .unsupported-page {
      display: block !important;
    }
  
    #root {
      display: none;
    }
  }

  body {
    overflow: hidden;
  }
`;
