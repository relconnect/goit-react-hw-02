import React from "react";
import styles from "./Reader.module.css";

const ControlNext = ({ handleNext, disabled }) => (
  <button
    type="button"
    onClick={handleNext}
    className={styles["button"]}
    disabled={disabled}
  >
    Вперед
  </button>
);

export default ControlNext;
