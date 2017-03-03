import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
    background-color: #DFE2DB;
  }

  body {
    font-family: 'NTR', sans-serif;
    text-align: center;
  }

  #app {
    min-height: 100%;
    min-width: 100%;
  }

  @keyframes fadeIn {
    from {
      background: rgba(85, 140, 137, 0);
      height:500px;
      width:500px;
      border-radius: 250px;
    }
    to {
      background: rgba(85, 140, 137, 1);
      height:500px;
      width:500px;
      border-radius: 250px;
    }
  }

  @keyframes circleToDiv {
    from {
      height:500px;
      width:500px;
      border-radius: 250px;
    }
    to {
      border-radius: 0px;
      width: 100%;
    }
  }

  p,
  label {
    font-family: 'Lato', sans-serif;
    line-height: 1.5em;
  }
`;
