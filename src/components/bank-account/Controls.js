import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Dashboard.module.css';

export default class Controls extends Component {
  state = {};

  static propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onDeposite: PropTypes.func.isRequired,
    onWithdraw: PropTypes.func.isRequired,
  };

  render() {
    return (
      <section className={styles.controls}>
        <input
          className={styles.input}
          type="number"
          value={this.props.value}
          onChange={this.props.onChange}
        />
        <button
          type="button"
          className={styles.btn}
          onClick={this.props.onDeposite}
        >
          Deposit
        </button>
        <button
          type="button"
          className={styles.btn}
          onClick={this.props.onWithdraw}
        >
          Withdraw
        </button>
      </section>
    );
  }
}
