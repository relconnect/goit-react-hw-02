import React from "react";
import styles from "./Reader.module.css";

const ControlPrev = ({ handlePrev, disabled }) => (
  <button
    type="button"
    onClick={handlePrev}
    className={styles["button"]}
    disabled={disabled}
  >
    Назад
  </button>
);
export default ControlPrev;
