const express = require('express');
const postagemRoutes = require('./postagens');
const usuariosRoutes = require('./usuarios');


const router = express.Router();

router.get('/', (req, res) => {
  res.send('App está Online :)!')
});

router.use('/postagens', postagemRoutes);

router.use('/usuarios', usuariosRoutes);


module.exports = router;