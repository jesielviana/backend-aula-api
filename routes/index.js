const express = require('express');
const postagemRoutes = require('./postagensRoutes');


const router = express.Router();

router.get('/', (req, res) => {
  res.send('App está Online :)!')
});

router.use('/postagens', postagemRoutes);

// router.use('/users', )

module.exports = router;