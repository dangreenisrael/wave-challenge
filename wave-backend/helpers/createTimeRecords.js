const dbConfig = require('../database');
const caminte = require('caminte');
const Schema = caminte.Schema;
const schema = new Schema('mysql', dbConfig);
const Timesheet = require('../models/TimesheetModel')(schema);
const moment = require('moment');

module.exports = data => {
  const recordsPromises = data.map(arr => {
    const [dateString, hoursWorked, employeeId, jobGroup] = arr;
    new Timesheet();
    const date = moment(dateString, 'DD-MM-YYYY').format();
    const record = {date, hoursWorked, employeeId, jobGroup};
    return Timesheet.create(record);
  });
  return Promise.all(recordsPromises);
};
