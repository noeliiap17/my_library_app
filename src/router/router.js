import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import App from "../ui/container/App";
import About from "../ui/container/About";

const Router = () => (
  <HashRouter>
    <BrowserRouter>
      <Route exact path="/" component={App} />
      <Route path="/about" component={About} />
    </BrowserRouter>
  </HashRouter>
);

export default Router;
