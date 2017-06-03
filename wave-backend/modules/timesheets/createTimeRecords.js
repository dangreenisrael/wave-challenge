const Timesheet = require('../../models/TimesheetModel');
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
