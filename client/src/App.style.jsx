import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    color: black;
    font-size: 18px;
  }

  body {
    padding: 10px;

    @media screen and (min-width: 800px){
      padding: 20px 10px;
    }

    @media screen and (min-width: 900px){
      padding: 20px 80px;
    }
  }
`;
export default GlobalStyles;
