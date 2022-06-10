const mongoose = require('mongoose');

function conectaMongoDB() {
  mongoose.connect('mongodb://localhost:27017/backend_aula_api', { useUnifiedTopology: true, useNewUrlParser: true }
  );

  const db = mongoose.connection;

  db.on('error', console.error.bind(console, 'Erro:'));

  db.once('open', () => console.info('MongoDB conectado!'));
}

module.exports = conectaMongoDB;
