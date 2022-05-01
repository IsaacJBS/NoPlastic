import React from "react";
import styles from "./style.module.css";

const HomeButtons = ({ text, type, image }) => {
  return (
    <button
      className={
        type === "button__yellow" ? styles.button__yellow : styles.button
      }
    >
      {text}
      <img
        src={image}
        className={
          image === "cardImg" ? styles.button__img_card : styles.button__img
        }
        alt=""
      />
    </button>
  );
};

export default HomeButtons;
