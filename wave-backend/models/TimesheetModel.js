/**
 *  Define Timesheet Model
 *  @param {Object} schema
 *  @return {Object}
 **/
const dbConfig = require('../database');
const caminte = require('caminte');
const Schema = caminte.Schema;
const schema = new Schema(dbConfig.driver, dbConfig);

module.exports = schema.define(
  'timesheets',
  {
    date: {type: schema.Date},
    hoursWorked: {type: schema.Number},
    employeeId: {type: schema.Number},
    jobGroup: {type: schema.Text}
  },
  {}
);
