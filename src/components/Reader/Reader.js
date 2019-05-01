import React, { Component } from "react";
import Publication from "./Publication";
import Counter from "./Counter";
import ControlPrev from "./ControlPrev";
import ControlNext from "./ControlNext";
import styles from "./Reader.module.css";

export default class Reader extends Component {
  //   static defaultProps = {
  //     currentArticle: 0,
  //     currentPage: 0
  //   };

  state = {
    currentArticle: 0,
    currentPage: 1,
    disabledPrev: true,
    disabledNext: false
  };

  static propTypes = {};

  handlePrev = evt => {
    if (this.state.currentPage <= 1) {
      this.setState(prevState => {
        return {
          disabledPrev: (prevState.disabledPrev = true)
        };
      });
      console.log(this.state.disabled);
    } else {
      this.setState(prevState => {
        return {
          disabledPrev: false,
          disabledNext: false,
          currentArticle: this.state.currentArticle - 1,
          currentPage: this.state.currentPage - 1
        };
      });
      console.log(this.state.disabled);
    }
  };

  handleNext = evt => {
    if (this.state.currentPage >= this.props.publications.length) {
      this.setState(prevState => {
        return {
          disabled: (prevState.disabledNext = true)
        };
      });
      console.log(this.state.disabledNext, this.state.currentPage);
    } else {
      this.setState(prevState => {
        return {
          disabledNext: false,
          disabledPrev: false,
          currentArticle: this.state.currentArticle + 1,
          currentPage: this.state.currentPage + 1
        };
      });
      console.log(this.state.disabled, this.state.currentPage);
    }
  };

  render() {
    return (
      <div className={styles["reader"]}>
        <Publication {...this.props.publications[this.state.currentArticle]} />
        <Counter
          page={this.state.currentPage}
          quantity={this.props.publications.length}
        />
        <section className={styles["controls"]}>
          <ControlPrev
            handlePrev={this.handlePrev}
            disabled={this.state.disabledPrev}
          />
          <ControlNext
            handleNext={this.handleNext}
            disabled={this.state.disabledNext}
          />
        </section>
      </div>
    );
  }
}