const express = require('express');
const UsersController = require('../controllers/usuarios');
const Usuario = require('../models/usuario');

const router = express.Router();

const usersController = new UsersController(Usuario);

router.get('/', async (req, res) => {
  try {
    const users = await usersController.consultaTodos();
    res.send(users);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.get('/:id', async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const user = await usersController.consultaPorId(id);
    res.send(user);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.post('/', async (req, res) => {
  try {
    await usersController.adicionar(req.body);
    res.status(201).send('Usuário adicionado com sucesso!');
  } catch (err) {
    res.status(400).send(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    await usersController.alterar(req.params.id, req.body);
    res.send('Usuário alterado com sucesso!');
  } catch (err) {
    res.status(400).send(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await usersController.remover(req.params.id);
    res.send('Usuário removido com sucesso!');
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;