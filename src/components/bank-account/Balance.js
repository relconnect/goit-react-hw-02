import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Dashboard.module.css';

export default class Balance extends Component {
  state = {};

  static propTypes = {
    balance: PropTypes.number.isRequired,
    totalDepostValue: PropTypes.number.isRequired,
    totalWithdrawValue: PropTypes.number.isRequired,
  };

  render() {
    return (
      <section className={styles.balance}>
        <span
          className={styles['balance-text']}
          role="img"
          aria-label="arrow-up"
        >
          ⬆️ {this.props.totalDepostValue.toFixed(2)}$
        </span>
        <span
          className={styles['balance-text']}
          role="img"
          aria-label="arrow-down"
        >
          ⬇️ {this.props.totalWithdrawValue.toFixed(2)}$
        </span>
        <span className={styles['balance-text']}>
          Balance: {this.props.balance.toFixed(2)}$
        </span>
      </section>
    );
  }
}
