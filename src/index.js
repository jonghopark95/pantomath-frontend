import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { css, createGlobalStyle, ThemeProvider } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  body{
      ${reset};
      font-family: ${(props) => props.theme.fontFamily};
  }
`;

const theme = {
  fontFamily: "Nanum Myeongjo",
  putCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
};

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
      <GlobalStyles />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
