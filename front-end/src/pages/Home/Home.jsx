import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Container from "../../components/Container/Container";
import styles from "./style.module.css";
import HomeButtons from "../../components/HomeButtons/HomeButtons";
import HomeBanner from "../../components/HomeBanner/HomeBanner";
import cardImg from "../../assets/card.svg";
import heartImg from "../../assets/heart.svg";
import bagImg from "../../assets/bag.svg";
import moneyImg from "../../assets/money.svg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Container color="default">
      <Header />
      <div className={styles.home}>
        <span>Saldo disponível</span>
        <h1>R$22,95</h1>
        <div className={styles.home__buttons}>
          <HomeButtons text="Usar meu cashback" image={moneyImg} />
          <HomeButtons text="Loja" image={bagImg} />
          <HomeButtons text="Mercados Parceiros" image={heartImg} />
          <HomeButtons text="Promoções" image={cardImg} />
          <Link to="/scanner">
            <HomeButtons text="Escanear QR Code" type="button__yellow" />
          </Link>
        </div>
        <HomeBanner />
      </div>
      <Footer />
    </Container>
  );
};

export default Home;
