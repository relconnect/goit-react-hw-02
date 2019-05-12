import React, { Component } from "react";
// import PropTypes from "prop-types";
import styles from "./Movies.module.css";
import SearchBar from "./SearchBar";
import MovieGrid from "./MovieGrid";
import movies from "../../movies.json";

const filterMovies = (movies, filter) => {
  return movies.filter(movie =>
    movie.title.toLowerCase().includes(filter.toLowerCase())
  );
};
export default class MoviePage extends Component {
  state = {
    movies: [...movies],
    value: "",
    filter: ""
  };

  changeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  render() {
    const filteredMovies = filterMovies(this.state.movies, this.state.filter);
    return (
      <div className={styles["container"]}>
        <SearchBar value={this.state.filter} onChange={this.changeFilter} />
        <MovieGrid movies={filteredMovies} />
      </div>
    );
  }
}
