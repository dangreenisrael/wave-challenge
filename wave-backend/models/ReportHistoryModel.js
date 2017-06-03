const dbConfig = require('../database');
const caminte = require('caminte');
const Schema = caminte.Schema;
const schema = new Schema('mysql', dbConfig);
module.exports = schema.define(
  'history',
  {
    id: {type: schema.Number},
    body: {type: schema.Text}
  },
  {}
);
