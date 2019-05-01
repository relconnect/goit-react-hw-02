import React from "react";
import styles from "./Reader.module.css";

const Publication = ({ text, title }) => (
  <section className={styles["publication"]}>
    <h2>{title}</h2>
    <p>{text}</p>
  </section>
);
export default Publication;
