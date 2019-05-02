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
    }
  }

  ul, ol {
    list-style: none;
  }
`;