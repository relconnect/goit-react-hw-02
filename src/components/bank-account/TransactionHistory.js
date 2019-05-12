import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Dashboard.module.css";

export default class TransactionHistory extends Component {
  render() {
    return (
      <table className={styles["history"]}>
        <thead className={styles["table-head"]}>
          <tr>
            <th className={styles["history-title"]}>Transaction</th>
            <th className={styles["history-title"]}>Amount</th>
            <th className={styles["history-title"]}>Date</th>
          </tr>
        </thead>
        <tbody>
          {this.props.history.map(row => (
            <tr key={row.id}>
              <td>{row.type}</td>
              <td>{row.amount.toFixed(2)}$</td>
              <td>{row.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
