import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import App from "./App";
import { Provider } from 'react-redux'
import { getServerStore } from "./store";
import Counter from "./components/Counter";

const app = express();

app.use(express.static("public"));

app.get("*", async (req, res) => {
  const store = getServerStore()
  let promiseArr = [];
  //TODO: 这里需要改造成使用req.path匹配到具体的路由配置下的loadData方法来进行拉取
  if (typeof Counter.loadData === 'function') {
    // 要将store传递过去 
    // item.route.loadData() 返回的是一个promise
    promiseArr.push(Counter.loadData(store))
  }

  // 等待异步完成，store已完成更新
  await Promise.all(promiseArr);
  
  let html = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url}>
        <App />
      </StaticRouter>
    </Provider>
  );

  const content = `<!DOCTYPE html> 
    <html>
    <head>
      <title>Server Rendered App</title>
    </head>
    <body>
    <div id="root">${html}</div>
      <script>
        window.context = {
          state: ${JSON.stringify(store.getState())}
        }
      </script>
      <script src="bundle.js"></script>
    </body>
  </html>`;
  res.send(content);
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
