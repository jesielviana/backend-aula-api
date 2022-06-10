const express = require('express');
const UsuariosController = require('../controllers/usuarios');
const Usuario = require('../models/usuario');

const router = express.Router();

const usuariosController = new UsuariosController(Usuario);

router.get('/', async (req, res) => {
  try {
    const users = await usuariosController.consultaTodos();
    res.send(users);
  } catch (err) {
    console.error(err)
    res.status(400).send(err);
  }
});

router.get('/:id', async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const user = await usuariosController.consultaPorId(id);
    res.send(user);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const userSalvo = await usuariosController.adicionar(req.body);
    res.status(201).json(userSalvo);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    await usuariosController.alterar(req.params.id, req.body);
    res.send('Usuário alterado com sucesso!');
  } catch (err) {
    res.status(400).send(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await usuariosController.remover(req.params.id);
    res.send('Usuário removido com sucesso!');
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;