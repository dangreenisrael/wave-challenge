const Timesheet = require('../models/TimeRecordModel');
const getTotalPayForTimePeriodByEmployee = require('../modules/payrollReport/getTotalPayForTimePeriodByEmployee');

module.exports = (req, res) => {
  new Timesheet();
  // We are getting all records because the spec calls for all time records ever
  Timesheet.all((err, docs) => {
    if (err) return res.status(500).json({error: 'DB Error'});
    res.json(getTotalPayForTimePeriodByEmployee(docs));
  });
};
