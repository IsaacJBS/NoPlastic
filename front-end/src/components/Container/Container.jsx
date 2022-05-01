import React from "react";
import styles from "./style.module.css";

const Container = ({ children, color }) => {
  return (
    <div
      className={
        color === "default"
          ? styles.container__component
          : styles.container__component_color
      }
    >
      {children}
    </div>
  );
};

export default Container;
