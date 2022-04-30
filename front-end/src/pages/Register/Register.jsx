import React from "react";
import styles from "./style.module.css";
import Container from "../../components/Container/Container";
import CustomButton from "../../components/CustomButton/CustomButton";
import help from "../../assets/help.svg";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <Container>
      <div className={styles.container__register}>
        <div className={styles.back}>
          <Link to="/">voltar</Link>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={styles.container__register__section}
        >
          <div className={styles.container__register__title}>
            <h1>Crie sua conta</h1>
            <p>É super rápido!</p>
          </div>
          <div className={styles.container__input}>
            <label htmlFor="name">Nome</label>
            <input {...register("name")} id="name" type="text" />
          </div>
          <div className={styles.container__input}>
            <label htmlFor="email">Email</label>
            <input {...register("email")} id="email" type="email" />
          </div>
          <div className={styles.container__input}>
            <div className={styles.container__input__helper}>
              <label htmlFor="phone">Telefone</label>
              <img src={help} alt="" />
            </div>
            <input
              {...register("phone")}
              id="phone"
              type="number"
              placeholder="11999999999"
            />
          </div>
          <div className={styles.container__input}>
            <div className={styles.container__input__helper}>
              <label htmlFor="cep">Cep</label>
              <img src={help} alt="" />
            </div>
            <input {...register("cep")} id="cep" type="text" />
          </div>
          <div className={styles.container__input}>
            <div className={styles.container__input__last}>
              <label htmlFor="pass">Crie sua senha</label>
              <span>(8 dígitos)</span>
            </div>
            <input {...register("pass")} id="pass" type="password" />
          </div>
          <CustomButton type="submit" className="default" text="Confirmar" />
        </form>
      </div>
    </Container>
  );
};

export default Register;
