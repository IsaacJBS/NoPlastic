import React from "react";
import styles from "./styles.module.css";
import Container from "../../components/Container/Container";
import Footer from "../../components/Footer/Footer";
import News1 from "./images/news1.png";
import News2 from "./images/news2.png";
import News3 from "./images/news3.png";
import News4 from "./images/news4.png";
import { Link } from "react-router-dom";

function openNews(url) {
  window.open(url, "_blank");
}

export default function News() {
  return (
    <Container color="default">
      <div className={styles.container}>
        <div className={styles.sidebar}>
          <Link to="/home">
            <button>Voltar</button>
          </Link>
        </div>
        <div className={styles.content}>
          <div className={styles.news1}>
            <h1>O planeta das sacolas plásticas</h1>
            <img
              src={News1}
              onClick={() =>
                openNews(
                  "https://blog.superandreazza.com.br/o-planeta-das-sacolas-plasticas/",
                )
              }
              alt=""
            />
          </div>
          <div className={styles.news2}>
            <h1>Sacola plástica é uma das maiores vilãs do meio ambiente</h1>
            <img
              src={News2}
              onClick={() =>
                openNews(
                  "https://www12.senado.leg.br/noticias/materias/2016/04/19/sacola-plastica-e-uma-das-maiores-vilas-do-meio-ambiente",
                )
              }
              alt=""
            />
          </div>
          <div className={styles.news3}>
            <h1>
              Plastic Oceans: MEPs back EU ban on polluting throwaway plastics
              by 2021
            </h1>
            <img
              alt=""
              src={News3}
              onClick={() =>
                openNews(
                  "https://www.europarl.europa.eu/news/de/press-room/20181009IPR15501/plastic-oceans-meps-back-eu-ban-on-polluting-throwaway-plastics-by-2021",
                )
              }
            />
          </div>
          <div className={styles.news4}>
            <h1>Impacto das Sacolas Plásticas no Meio Ambiente</h1>
            <img
              alt=""
              src={News4}
              onClick={() =>
                openNews(
                  "https://www.pensamentoverde.com.br/meio-ambiente/impacto-das-sacolas-plasticas-no-meio-ambiente/",
                )
              }
            />
          </div>
        </div>
      </div>
      <Footer />
    </Container>
  );
}
