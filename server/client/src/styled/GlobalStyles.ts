import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html {
    margin: 0;
    padding: 0;
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: 'Roboto', sans-serif;
      letter-spacing: 0.02em;
      scrollbar-width: none;
      user-select: none;
    }
  }

  ul, ol {
    list-style: none;
  }

  ::-webkit-scrollbar {
    width: 0px;
    background: transparent;
`;