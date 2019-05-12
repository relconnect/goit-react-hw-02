import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Movies.module.css";

export default class SearchBar extends Component {
  state = {
    value: ""
  };
  static propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
  };

  render() {
    return (
      <input
        type="text"
        className={styles["input"]}
        value={this.props.value}
        onChange={this.props.onChange}
      />
    );
  }
}
