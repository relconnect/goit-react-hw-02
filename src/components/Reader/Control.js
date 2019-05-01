import React from "react";
import styles from "./Reader.module.css";

const Control = ({ handleNext, handlePrev, disabled }) => (
  <section className={styles["controls"]}>
    <button
      type="button"
      onClick={handleNext}
      className={styles["button"]}
      disabled={disabled}
    >
      Вперед
    </button>
    <button
      type="button"
      onClick={handlePrev}
      className={styles["button"]}
      disabled={disabled}
    >
      Назад
    </button>
  </section>
);

export default Control;
