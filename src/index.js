import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./utilities/useAuth";
import { createGlobalStyle } from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./containers/App";

const GlobalStyle = createGlobalStyle`
  html, body, #root {
   height: 100%;
  }
`;

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <AuthProvider>
      <App />
      <GlobalStyle />
    </AuthProvider>
  </BrowserRouter>,
  rootElement
);
