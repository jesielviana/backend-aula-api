const express = require('express');
const router = express.Router();
const PostagensController = require('../controllers/postagens');
const PostagemModel = require('../models/postagem'); 

const postagensController = new PostagensController(PostagemModel);

// get localhost:3000/postagens
router.get('/', async (req, res) => {
  const postagens = await postagensController.consultarTodos();
  res.send(postagens);
});

// get localhost:3000/postagens/{id}

// post localhost:3000/postagens
router.post('/', async (req, res) => {
  const novaPostagem = req.body;
  const retorno = await postagensController.adicionar(novaPostagem);
  res.send(retorno);
});

// put localhost:3000/postagens/{id}
router.put('/:id', async (req, res) => {
  const id = req.params.id;
  const postagemDTO = req.body;
  await postagensController.alterarPorId(id, postagemDTO);
  res.send('Alterado com sucesso!');
})

// delete localhost:3000/postagens/{id}

module.exports = router;