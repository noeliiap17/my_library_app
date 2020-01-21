import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Router from "./router/router.js";
import { Provider } from "react-redux";
import initStore from "./config/store";
import * as serviceWorker from "./serviceWorker";

// Init Redux store
const store = initStore();

ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
