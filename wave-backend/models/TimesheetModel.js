/**
 *  Define Timesheet Model
 *  @param {Object} schema
 *  @return {Object}
 **/

module.exports = schema =>
  schema.define('timesheets', {
    date: {type: schema.Date},
    hoursWorked: {type: schema.Number},
    employeeId: {type: schema.Number},
    jobGroup: {type: schema.Text}
  });
