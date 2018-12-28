import { injectGlobal } from 'styled-components';

// eslint-disable-next-line
injectGlobal`
  html.unsupported {
    .unsupported-page {
      display: block !important;
    }
  
    #root {
      display: none;
    }
  }
`;
