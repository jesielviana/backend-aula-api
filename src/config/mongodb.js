const mongoose = require('mongoose');

const MONGODB_URL = process.env.MONGODB_URL || 'mongodb://localhost:27017/backend_aula_api';

function conectaMongoDB() {
  mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true }
  );

  const db = mongoose.connection;

  db.on('error', console.error.bind(console, 'Erro:'));

  db.once('open', () => console.info('MongoDB conectado!'));
}

module.exports = conectaMongoDB;
