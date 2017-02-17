import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background: rgb(50,135,132); /* Old browsers */
    background: -moz-linear-gradient(top, rgba(50,135,132,1) 1%, rgba(102,126,155,1) 74%, rgba(43,136,217,1) 95%); /* FF3.6-15 */
    background: -webkit-linear-gradient(top, rgba(50,135,132,1) 1%,rgba(102,126,155,1) 74%,rgba(43,136,217,1) 95%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to bottom, rgba(50,135,132,1) 1%,rgba(102,126,155,1) 74%,rgba(43,136,217,1) 95%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#328784', endColorstr='#2b88d9',GradientType=0 ); /* IE6-9 */

    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }
`;
