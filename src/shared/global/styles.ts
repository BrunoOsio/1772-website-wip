import { createGlobalStyle } from "styled-components";
import { colors } from "./colors";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    /* background-color: rgba(230, 0, 0, 0.1); */
    font-family: 'Quicksand', sans-serif;
  }

  html {
    scroll-behavior: smooth;
  }

  body::-webkit-scrollbar {
    width: 0.45em;
    background-color: ${colors.blue};
  }
 
  body::-webkit-scrollbar-thumb {
    background-color: ${colors.blueVariant};
    border-radius: 999px;
  }
`;