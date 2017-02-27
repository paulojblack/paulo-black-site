import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'NTR', sans-serif;
    text-align: center;
  }

  #app {
    min-height: 100%;
    min-width: 100%;
    background: #FFFFFF;
  }

  p,
  label {
    font-family: 'Lato', sans-serif;
    line-height: 1.5em;
  }
`;
