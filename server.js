const app = require('./src/app');
const conectaMongoDB = require('./src/config/mongodb');


conectaMongoDB();

const PORTA = process.env.PORT || 80;
app.listen(PORTA, () => {
  console.log(`App listening at http://localhost:${PORTA}`)
});