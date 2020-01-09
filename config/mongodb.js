const mongoose = require('mongoose');

function conectaMongoDB() {
  mongoose.connect(
    'mongodb://upucxxkhq2vmykapvgxp:VKuZVNDp6cNElfVF2IlK@bwcnupplrmojfvk-mongodb.services.clever-cloud.com:27017/bwcnupplrmojfvk',
    { useUnifiedTopology: true, useNewUrlParser: true }
  );

  const db = mongoose.connection;

  db.on('error', console.error.bind(console, 'Erro:'));

  db.once('open', () => console.info('MongoDB conectado!'));
}

module.exports = conectaMongoDB;
