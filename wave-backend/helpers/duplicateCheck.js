const dbConfig = require('../database');
const caminte = require('caminte');
const Schema = caminte.Schema;
const schema = new Schema('mysql', dbConfig);
const Report = require('../models/ReportModel')(schema);

module.exports = id =>
  new Promise((resolve, reject) => {
    Report.findOne({where: {id}}).then(docs => {
      if (docs) return reject(409);
      resolve(true);
    });
  });
