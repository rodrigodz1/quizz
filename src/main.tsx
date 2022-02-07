import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./shared/pages/Home";
import GlobalStyle from "./shared/styles/global";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    <GlobalStyle />
  </BrowserRouter>,
  rootElement
);
