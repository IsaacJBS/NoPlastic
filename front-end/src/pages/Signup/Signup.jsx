import React, { useState } from "react";
import styles from "./style.module.css";
import Container from "../../components/Container/Container";
import CustomButton from "../../components/CustomButton/CustomButton";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import SchemaLogin from "../../validations/SchemaLogin";
import { yupResolver } from "@hookform/resolvers/yup";
import Loader from "../../helpers/Loader";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const validationRegister = { resolver: yupResolver(SchemaLogin) };
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(validationRegister);
  async function onSubmit(data) {
    try {
      setLoading(true);
      const requestLogin = await fetch(
        "https://no-plastic-a.herokuapp.com/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        },
      );
      const responseStatus = requestLogin.status;
      const responseApi = await requestLogin.json();
      if (responseStatus === 200) {
        navigate("/home");
      }
      if (responseStatus !== 200) {
        setError(responseApi);
        setTimeout(() => {
          setError("");
        }, 2000);
      }
      setLoading(false);
    } catch (error) {
      setError(error);
    }
  }

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
            <h1>Entrar na minha conta</h1>
          </div>
          <div className={styles.container__input}>
            <label htmlFor="name">Email</label>
            <input {...register("email")} id="name" type="text" />
            <p className="errors">{errors.email?.message}</p>
          </div>
          <div className={styles.container__input}>
            <label htmlFor="email">Senha</label>
            <input {...register("senha")} id="email" type="password" />
            <p className="errors">{errors.senha?.message}</p>
          </div>
          <CustomButton type="submit" className="default" text="Confirmar" />
        </form>
        {loading && <Loader />}
      </div>
      {error && <p className={styles.error}>{error}</p>}
    </Container>
  );
};

export default Signup;
