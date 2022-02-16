import { createGlobalStyle } from 'styled-components';
import { colors } from './colors';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box

  }

  body {    
    background-color: ${colors.black};
    font: 16px 'Maven Pro', sans-serif;
    color: ${colors.gray}
  }

  button {
    cursor: pointer;
  }

`;

export default GlobalStyle;
