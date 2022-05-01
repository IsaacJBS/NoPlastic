import React from "react";
import styles from "./style.module.css";
import homeIcon from "../../assets/home.svg";
import searchIcon from "../../assets/search.svg";
import storeIcon from "../../assets/store.svg";
import supportIcon from "../../assets/support.svg";
import cashbackIcon from "../../assets/cashback.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Link to="/home">
        <img src={homeIcon} alt="" />
      </Link>
      <img src={searchIcon} alt="" />
      <img src={cashbackIcon} alt="" />
      <img src={storeIcon} alt="" />
      <a
        href="https://chat.whatsapp.com/FUZJ3oUPGGR7xtrRw3E0BO"
        target="__blank"
      >
        <img src={supportIcon} alt="" />
      </a>
    </footer>
  );
};

export default Footer;
