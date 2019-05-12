import React from "react";
import ReactDOM from "react-dom";
import Reader from "./components/Reader/Reader";
import MoviePage from "./components/Movies/MoviePage";
import Dashboard from "./components/bank-account/Dashboard";
import publications from "./publications.json";

ReactDOM.render(
  <div>
    <Reader publications={publications} />
    <MoviePage />
    <Dashboard />
  </div>,
  document.getElementById("root")
);
