import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Router from "./router/router.js";
import { Provider } from "react-redux";
import { createStore } from "redux";
import * as serviceWorker from "./serviceWorker";
import reducer from "./reducers";

const initialState = {
  users: [
    { name: "Noelia", phone: "687995500" },
    { name: "Tamara", phone: "687995500" },
    { name: "Lucia", phone: "687995500" },
    { name: "Alba", phone: "687995500" }
  ]
};

const store = createStore(reducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
