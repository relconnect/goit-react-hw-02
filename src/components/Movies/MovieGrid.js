import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Movies.module.css";
import MovieGridItem from "./MovieGridItem";

export default class MovieGrid extends Component {
  state = {};
  static propTypes = {
    movies: PropTypes.array.isRequired
  };

  render() {
    // console.log(this.state.movies);
    return (
      <div className={styles["movie-grid"]}>
        <MovieGridItem movies={this.props.movies} />
      </div>
    );
  }
}
