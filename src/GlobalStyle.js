import { createGlobalStyle } from 'styled-components';
import 'assets/fonts/fonts.css';

const GlobalStyle = createGlobalStyle`
  :hover, :focus {
    outline: none;
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    font-family: "Bebas Neue", cursive, sans-serif;
  }

  body, h1, h2, h3, div {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: none;
    outline: none;
  }

  a {
    text-decoration: none;

    :hover {
      text-decoration: underline;
    }
  }

  img {
    vertical-align: middle;
  }
`;

export default GlobalStyle;
