import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {

      overscroll-behavior: none;
      margin: 0;
      font-family: Montserrat, 'Helvetica Neue', sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale; 
  }
`;
