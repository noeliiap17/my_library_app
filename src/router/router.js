import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import App from "../ui/container/App";
import MovieDetail from "../ui/container/movies/MovieDetail";

const Router = () => (
  <HashRouter>
    <BrowserRouter>
      <Route exact path="/" component={App} />
      <Route path="/detalle/:id" component={MovieDetail} />
    </BrowserRouter>
  </HashRouter>
);

export default Router;
