const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const conectaMongoDB = require('./config/mongodb');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/', routes);
conectaMongoDB();
const PORTA = process.env.PORT || 3000
app.listen(PORTA, () => console.log('App online...'));
