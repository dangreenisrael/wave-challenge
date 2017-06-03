const Timesheet = require('../models/TimesheetModel');
const {
  getPayAmount,
  formatPayPeriod,
  getTotalPayForTimePeriodByEmployee
} = require('../modules/payrollReport');

module.exports = (req, res) => {
  new Timesheet();
  // We are getting all records because the spec calls for all time records ever
  Timesheet.all((err, docs) => {
    if (err) return res.status(500).json({error: 'DB Error'});
    const payrollRecords = docs.map(record => ({
      employeeId: record.employeeId,
      payPeriod: formatPayPeriod(record.date),
      totalPay: getPayAmount(record)
    }));
    const totalPayForTimePeriodByEmployee = getTotalPayForTimePeriodByEmployee(payrollRecords);
    res.json(totalPayForTimePeriodByEmployee);
  });
};
