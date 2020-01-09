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

app.listen(3000, () => console.log('App online...'));
