import React from "react";
import ReactDOM from "react-dom";
import Reader from "./components/Reader/Reader";
import publications from "./publications.json";

ReactDOM.render(
  <Reader publications={publications} />,
  document.getElementById("root")
);
