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
    text-align: center;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    min-height: 100%;
    min-width: 100%;
    background: rgb(50,135,132); /* Old browsers */
    background: -moz-linear-gradient(top, rgba(43,136,217,1) 1%, rgba(102,126,155,1) 34%, rgba(50,135,132,1) 85%); /* FF3.6-15 */
    background: -webkit-linear-gradient(top, rgba(43,136,217,1) 1%,rgba(102,126,155,1) 34%,rgba(50,135,132,1) 85%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to bottom, rgba(43,136,217,1) 1%,rgba(102,126,155,1) 34%,rgba(50,135,132,1) 85%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#328784', endColorstr='#2b88d9',GradientType=0 ); /* IE6-9 */
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }
`;
