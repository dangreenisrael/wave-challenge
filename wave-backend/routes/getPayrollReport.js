const Timesheet = require('../models/TimesheetModel');
const {
  getPayAmount,
  formatPayPeriod,
  groupByIdAndPayPeriod,
  getTotalsPerPersonPerTimePeriod
} = require('../modules/payrollReport');

module.exports = (req, res) => {
  new Timesheet();
  Timesheet.all((err, docs) => {
    if (err) return res.status(500).json({error: 'DB Error'});
    const payrollRecords = docs.map(record => ({
      employeeId: record.employeeId,
      payPeriod: formatPayPeriod(record.date),
      totalPaid: getPayAmount(record)
    }));
    const groupedByIdAndPayPeriod = groupByIdAndPayPeriod(payrollRecords);
    const totalsPerPersonPerTimePeriod = getTotalsPerPersonPerTimePeriod(groupedByIdAndPayPeriod);
    res.json(totalsPerPersonPerTimePeriod);
  });
};
