import React from "react";
import cn from "classnames";
import "./loader.css";

const Loader = ({ small, fit }) => (
  <div
    className={cn("loader", {
      "loader--small": small,
      "loader--fit": fit
    })}
  />
);

export default Loader;
