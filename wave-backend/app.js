const express = require('express');
const cors = require('cors');
const app = express();
const routes = require('./router');
const initializeRelations = require('./models/initializeRelationships');
app.use(cors());
app.use('/api', routes);
initializeRelations();
const port = 9000;
app.listen(port, () => {
  console.log(`Wave App listening on port ${port}!`);
});
