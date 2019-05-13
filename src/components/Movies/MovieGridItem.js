import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Movies.module.css';

export default class MovieGridItem extends Component {
  state = {};

  static propTypes = {
    movies: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        overview: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        posterUrl: PropTypes.string.isRequired,
      }),
    ).isRequired,
  };

  render() {
    return this.props.movies.length > 0 ? (
      this.props.movies.map(movie => (
        <div key={movie.id} className={styles['movie-card']}>
          <img src={movie.posterUrl} alt="" />
          <div className="content">
            <h2>{movie.title}</h2>
            <p>{movie.overview}</p>
          </div>
        </div>
      ))
    ) : (
      <p>No such results</p>
    );
  }
}
