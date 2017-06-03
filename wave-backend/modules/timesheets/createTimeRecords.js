const Timesheet = require('../../models/TimesheetModel');
const moment = require('moment');

module.exports = data => {
  const recordsPromises = data.map(
    arr =>
      new Promise((resolve, reject) => {
        const [dateString, hoursWorked, employeeId, jobGroup] = arr;
        new Timesheet();
        const date = moment(dateString, 'DD-MM-YYYY').format();
        const record = {date, hoursWorked, employeeId, jobGroup};
        Timesheet.create(record, (err, doc) => {
          if (err) return reject(err);
          resolve(doc);
        });
      })
  );
  return Promise.all(recordsPromises);
};
