/**
 *  Define Employee Model
 *  @param {Object} schema
 *  @return {Object}
 **/
const dbConfig = require('../database');
const caminte = require('caminte');
const Schema = caminte.Schema;
const schema = new Schema(dbConfig.driver, dbConfig);

const EmployeeModel = schema.define(
  'employees',
  {
    employeeId: {type: schema.Integer, index: true},
    firstName: {type: schema.String},
    lastName: {type: schema.String}
  },
  {
    primaryKeys: ['employeeId']
  }
);

module.exports = EmployeeModel;
