import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
// background: -webkit-linear-gradient(top, rgba(74, 150, 173, 0.46) 0%,rgba(74, 150, 173, 0.46) 100%), repeat 0 0;
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
    background-color: #191919;
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
      background: rgba(74, 150, 173, 0);
      height:500px;
      width:500px;
      border-radius: 250px;
    }
    to {
      background: rgba(74, 150, 173, 1.0);
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
      height:600px;
      width: 100%;
    }
  }

  p,
  label {
    font-family: 'Lato', sans-serif;
    line-height: 1.5em;
  }
`;
