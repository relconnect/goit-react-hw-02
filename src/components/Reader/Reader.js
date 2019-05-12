import React, { Component } from "react";
import Publication from "./Publication";
import Counter from "./Counter";
// import Control from "./Control";
import styles from "./Reader.module.css";

export default class Reader extends Component {
  //   static defaultProps = {
  //     currentArticle: 0,
  //     currentPage: 0
  //   };

  //   state = {
  //     currentArticle: 0,
  //     currentPage: 1,
  //     disabledPrev: true,
  //     disabledNext: false
  //   };

  //   static propTypes = {};

  //   handlePrev = evt => {
  //     if (this.state.currentPage === 1) {
  //       this.setState(prevState => {
  //         return {
  //           disabledPrev: !prevState.disabledPrev
  //         };
  //       });
  //     } else {
  //       this.setState(prevState => {
  //         return {
  //           disabledPrev: (prevState.disabledPrev = false),
  //           disabledNext: (prevState.disabledNext = false),
  //           currentArticle: prevState.currentArticle - 1,
  //           currentPage: prevState.currentPage - 1
  //         };
  //       });
  //     }
  //   };

  //   handleNext = evt => {
  //     if (this.state.currentPage === this.props.publications.length) {
  //       this.setState(prevState => {
  //         return {
  //           disabledNext: !prevState.disabledNext
  //         };
  //       });
  //     } else {
  //       this.setState(prevState => {
  //         return {
  //           disabledNext: (prevState.disabledNext = false),
  //           disabledPrev: (prevState.disabledPrev = false),
  //           currentArticle: prevState.currentArticle + 1,
  //           currentPage: prevState.currentPage + 1
  //         };
  //       });
  //     }
  //   };
  state = {
    currentPage: 1
  };

  handlePrev = evt => {
    if (this.state.currentPage <= 1) {
      return;
    } else {
      this.setState(state => {
        return {
          currentPage: state.currentPage - 1
        };
      });
    }
  };
  handleNext = evt => {
    if (this.state.currentPage >= this.props.publications.length) {
      return;
    } else {
      this.setState(state => {
        return {
          currentPage: state.currentPage + 1
        };
      });
    }
  };

  render() {
    return (
      <div className={styles["reader"]} key={this.props.id}>
        <Publication {...this.props.publications[this.state.currentPage - 1]} />
        <Counter
          page={this.state.currentPage}
          quantity={this.props.publications.length}
        />
        <section className={styles["controls"]}>
          <button
            type="button"
            onClick={this.handlePrev}
            className={styles["button"]}
            disabled={this.state.currentPage <= 1}
          >
            Назад
          </button>
          <button
            type="button"
            onClick={this.handleNext}
            className={styles["button"]}
            disabled={this.state.currentPage >= this.props.publications.length}
          >
            Вперед
          </button>
        </section>
      </div>
    );
  }
}
