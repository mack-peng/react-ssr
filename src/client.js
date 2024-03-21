import React from "react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { hydrateRoot } from "react-dom/client";

const container = document.getElementById("root");
hydrateRoot(
  container,
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
