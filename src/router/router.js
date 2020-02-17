import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import App from "../ui/container/App";
import BookDetail from "../ui/container/books/BookDetail";

const Router = () => (
  <HashRouter>
    <BrowserRouter>
      <Route exact path="/" component={App} />
      <Route path="/detalle/:id" component={BookDetail} />
    </BrowserRouter>
  </HashRouter>
);

export default Router;
