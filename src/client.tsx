import React from "react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { hydrateRoot } from "react-dom/client";
import { getClientStore } from './store'
import { Provider } from "react-redux";

const container = document.getElementById("root");
hydrateRoot(
  container!,
  <Provider store={getClientStore()}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
