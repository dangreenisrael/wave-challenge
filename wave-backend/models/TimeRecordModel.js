/**
 *  Define Timesheet Model
 *  @param {Object} schema
 *  @return {Object}
 **/
const dbConfig = require('../database');
const caminte = require('caminte');
const Employee = require('./EmployeeModel');
const JobGroup = require('./JobGroupModel');
const {getBelongsTo} = require('./relationshipHelpers');
const Schema = caminte.Schema;
const schema = new Schema(dbConfig.driver, dbConfig);

const TimeRecordModel = schema.define(
  'timerecords',
  {
    date: {type: schema.Date},
    hoursWorked: {type: schema.Number},
    employeeId: {type: schema.Number, index: true},
    jobGroupId: {type: schema.String}
  },
  {}
);

TimeRecordModel.prototype.getEmployee = getBelongsTo('employeeId', Employee);
TimeRecordModel.prototype.getJobGroup = getBelongsTo('jobGroupId', JobGroup);

module.exports = TimeRecordModel;
