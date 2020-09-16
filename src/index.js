import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import GlobalStyles from "./GlobalStyles";
import theme from "./theme";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    body{
        /* @import url("https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600;700&family=Josefin+Sans:ital@0;1&family=Poppins:wght@300;400&display=swap"); */

        ${reset};
        font-family: ${(props) => props.theme.fontFamily};
    }
`;

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={{ fontFamily: "Nanum Myeongjo" }}>
      <App />
      <GlobalStyles />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
