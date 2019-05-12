import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Dashboard.module.css";

export default class Controls extends Component {
  render() {
    return (
      <section className={styles["controls"]}>
        <input className={styles["input"]} type="number" value={this.props.value} onChange={this.props.onChange} />
        <button className={styles["btn"]} onClick={this.props.onDeposite}>
          Deposit
        </button>
        <button className={styles["btn"]} onClick={this.props.onWithdraw}>
          Withdraw
        </button>
      </section>
    );
  }
}
