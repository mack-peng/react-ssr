import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import App from "./App";

const app = express();

app.use(express.static("public"));

app.get("*", (req, res) => {
  let html = renderToString(
    <StaticRouter location={req.url}>
      <App />
    </StaticRouter>
  );

  const content = `<!DOCTYPE html> 
    <html>
    <head>
      <title>Server Rendered App</title>
    </head>
    <body>
    <div id="root">${html}</div>
      <script src="bundle.js"></script>
    </body>
  </html>`;
  res.send(content);
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
