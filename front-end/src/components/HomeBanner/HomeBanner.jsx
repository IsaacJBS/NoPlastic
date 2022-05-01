import React from "react";
import styles from "./style.module.css";
import { Link } from "react-router-dom";

const HomeBanner = () => {
  return (
    <section className={styles.banner}>
      <h1>Por que usar ecobag?</h1>
      <p>Saiba os benefícios e impactos que você pode causar.</p>
      <Link to="/">leia mais</Link>
    </section>
  );
};

export default HomeBanner;
