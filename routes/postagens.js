const express = require('express');
const router = express.Router();
const PostagensController = require('../controllers/postagens');
const PostagemModel = require('../models/postagem'); 

const postagensController = new PostagensController(PostagemModel);

router.get('/autor', async (req, res) => {
  console.log('consulta por autor: ', req.body)
  const autor = req.body.autor;
  try {
    const postagem = await postagensController.consultarPorAutor(autor);
    res.send(postagem);
  } catch (err) {
    res.status(400).send(err);
  }
});


// get localhost:3000/postagens
router.get('/', async (req, res) => {
  const postagens = await postagensController.consultarTodos();
  res.send(postagens);
});

// get localhost:3000/postagens/{id}
router.get('/:id', async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const postagem = await postagensController.consultaPorId(id);
    res.send(postagem);
  } catch (err) {
    res.status(400).send(err);
  }
});

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