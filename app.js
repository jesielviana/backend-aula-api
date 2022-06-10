const express = require('express');
const routes = require('./routes');
const conectaMongoDB = require('./config/mongodb');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/', routes);
try {
  conectaMongoDB();
} catch (e) {
  console.error(e)
}
const PORTA = process.env.PORT || 80
app.listen(PORTA, () => console.log('App online...'));
