/**
 *  Define Report Model
 *  @param {Object} schema
 *  @return {Object}
 **/

module.exports = schema =>
  schema.define('reports', {
    id: {type: schema.Number},
    body: {type: schema.Text}
  });
