const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  nome: {
    type: String,
  },
  idade: {
    type: Number
  },
  dataAlteracao: {
    type: Date,
    default: Date.now()
  }
});

const Usuario = mongoose.model('Usuario', schema);

module.exports = Usuario;