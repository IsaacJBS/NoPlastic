import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Container from "../../components/Container/Container";
import styles from "./style.module.css";
import HomeButtons from "../../components/HomeButtons/HomeButtons";
import { Link } from "react-router-dom";

const Confirm = () => {
  return (
    <Container color="default">
      <Header />
      <div className={styles.confirm}>
        <header>
          <h1>Parabéns!</h1>
          <p>
            Você ganhou 5% de cashback e está colaborando com a vida de milhares
            de animais, com o oceano e o planeta.{" "}
          </p>
        </header>
        <div className={styles.confirm__button}>
          <HomeButtons text="Ver meu saldo" />
          <HomeButtons text="Usar meu cashback" />
        </div>
        <Link to="/home">Voltar</Link>
      </div>
      <Footer />
    </Container>
  );
};

export default Confirm;
