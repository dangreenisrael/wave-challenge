const dbConfig = require('../database');
const caminte = require('caminte');
const Schema = caminte.Schema;
const schema = new Schema('mysql', dbConfig);
const Timesheet = require('../models/ReportModel')(schema);

module.exports = ({id, body}) => {
  new Timesheet();
  return Timesheet.create({id, body});
};
