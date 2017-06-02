const express = require('express');
const cors = require('cors');
const app = express();
const routes = require('./routes');

app.use(cors());
app.use('/api', routes);

const port = 9000;
app.listen(port, () => {
  console.log(`Wave App listening on port ${port}!`);
});
