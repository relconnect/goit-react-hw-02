import React, { Component } from "react";
import PropTypes from "prop-types";
import Controls from "./Controls";
import Balance from "./Balance";
import TransactionHistory from "./TransactionHistory";
import shortId from "shortid";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import styles from "./Dashboard.module.css";
const MySwal = withReactContent(Swal);

export default class Dashboard extends Component {
  state = {
    history: [],
    balance: 0,
    value: "",
    totalDepostValue: 0,
    totalWithdrawValue: 0
  };
  depositeBalance = e => {
    if (+this.state.value === 0) {
      this.infoMsg();
      this.reset();
    } else {
      this.setState({
        balance: this.state.balance + +this.state.value,
        totalDepostValue: this.state.totalDepostValue + +this.state.value,
        history: [
          ...this.state.history,
          {
            id: shortId.generate(),
            type: e.target.textContent,
            amount: +this.state.value,
            date: new Date().toLocaleString("en-us", { hour12: false })
          }
        ]
      });
      this.reset();
      this.successMsg();
    }
  };

  withdrawBalance = e => {
    if (+this.state.value > this.state.balance) {
      this.errorMsg();
      this.reset();
    } else if (+this.state.value === 0) {
      this.infoMsg();
      this.reset();
    } else {
      this.setState({
        balance: this.state.balance - +this.state.value,
        totalWithdrawValue: this.state.totalWithdrawValue + +this.state.value,
        history: [
          ...this.state.history,
          {
            id: shortId.generate(),
            type: e.target.textContent,
            amount: +this.state.value,
            date: new Date().toLocaleString("en-us", { hour12: false })
          }
        ]
      });
      this.reset();
      this.successMsg();
    }
  };
  onChange = e => {
    this.setState({ value: e.target.value });
  };
  errorMsg = () => {
    MySwal.fire({
      type: "error",
      title: <p>На счету недостаточно средств для проведения операции!</p>,
      showConfirmButton: false,
      timer: 1500
    });
  };

  successMsg = () => {
    MySwal.fire({
      type: "success",
      title: <p>Операция успешно совершена!</p>,
      showConfirmButton: false,
      timer: 1500
    });
  };

  infoMsg = () => {
    MySwal.fire({
      type: "info",
      title: <p>Введите сумму для операции!</p>,
      showConfirmButton: false,
      timer: 1500
    });
  };

  reset = () => {
    this.setState({ value: "" });
  };
  render() {
    return (
      <div className={styles["dashboard"]}>
        <Controls
          value={this.state.value}
          onChange={this.onChange}
          onDeposite={this.depositeBalance}
          onWithdraw={this.withdrawBalance}
        />
        <Balance
          balance={this.state.balance}
          totalDepostValue={this.state.totalDepostValue}
          totalWithdrawValue={this.state.totalWithdrawValue}
        />
        <TransactionHistory history={this.state.history} />
      </div>
    );
  }
}