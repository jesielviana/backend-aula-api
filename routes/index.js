const express = require('express');
const postagemRoutes = require('./postagens');
const usuariosRoutes = require('./usuarios');


const router = express.Router();

router.get('/', (req, res) => {
  res.send(`
  <div style="max-width: 600px; font-size: 1.2rem; margin: 0 auto;">
  <h2 style="text-align: center;">App está Online :)</h2>

  <h3> API de Usuários</h3>
  <p>GET <a href="https://ifpi-web-nodejs.herokuapp.com/usuarios">https://ifpi-web-nodejs.herokuapp.com/usuarios</a>
  para consultar todos os usuários cadastrados. <br> É retornado uma lista de usuários 
  com o seguinte formato: {nome: String, idade: Number, dataAlteracao: Date, id: String}</p>

  <p>POST <a href="https://ifpi-web-nodejs.herokuapp.com/usuarios">https://ifpi-web-nodejs.herokuapp.com/usuarios</a>
  para adicionar um novo usuário. <br>  O usuário deve conter os seguintes
  atributos { nome: String, idade: Number }</p>

  <h3> API de Postagens</h3>
  <p>GET <a href="https://ifpi-web-nodejs.herokuapp.com/postagens">https://ifpi-web-nodejs.herokuapp.com/postagens</a>
  para consultar todas postagens cadastrados. <br> É retornado uma lista de postagens 
  com o seguinte formato: {titulo: String, texto: String, dataAlteracao: Date, autor: String, id: String}</p>

  <p>POST <a href="https://ifpi-web-nodejs.herokuapp.com/postagens">https://ifpi-web-nodejs.herokuapp.com/postagens</a>
  para adicionar uma nova postagem. <br>  A postagem deve conter os seguintes
  atributos { titulo: String, texto: String, autor: String }</p>
  </div>
  `)
});

router.use('/postagens', postagemRoutes);

router.use('/usuarios', usuariosRoutes);


module.exports = router;
