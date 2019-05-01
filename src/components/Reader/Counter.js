import React from "react";
import styles from "./Reader.module.css";

const Counter = ({ page, quantity }) => (
  <p className={styles["counter"]}>
    {page}/{quantity}
  </p>
);
export default Counter;
