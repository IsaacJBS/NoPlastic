import * as yup from "yup";

const schemaRegister = yup.object().shape({
  nome: yup.string().required("Por favor, insira um nome"),
  email: yup
    .string()
    .required("Por favor, insira um e-mail")
    .email("Por favor, insira um @ no e-mail"),
  senha: yup
    .string()
    .required("Por favor, insira uma senha")
    .min(8, "A senha precisa ter 8 caracteres"),
  telefone: yup.string().required("Por favor, insira um cep"),
  cep: yup.string().required("Por favor, insira um telefone"),
});

export default schemaRegister;
