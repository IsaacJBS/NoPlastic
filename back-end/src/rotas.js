const express = require('express');
const rotas = express();

const usuarios = require("./controladores/usuario");
const login = require('./controladores/login');
const filtroLogin = require('./filtro/filtroLogin');

rotas.post("/usuario", usuarios.cadastrarUsuario);

rotas.post('/login', login.login);

rotas.use(filtroLogin);

rotas.get("/usuarios", usuarios.getUsuario);
rotas.get('/usuario', usuarios.obterPerfilUsuario);

module.exports = rotas;