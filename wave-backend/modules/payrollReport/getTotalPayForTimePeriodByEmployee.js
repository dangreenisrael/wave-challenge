const getPayAmount = require('./getPayAmount');
const formatPayPeriod = require('./formatPayPeriod');
module.exports = timeRecords => {
  const payrollRecords = timeRecords.map(record => ({
    employeeId: record.employeeId,
    payPeriod: formatPayPeriod(record.date),
    totalPay: getPayAmount(record)
  }));

  const groupedByIdAndPayPeriodObj = payrollRecords.reduce(
    (acc, rec) => {
      const key = `${rec.employeeId} - ${rec.payPeriod}`; // Unique key for id/pay period
      const {employeeId, payPeriod, totalPay} = rec;
      acc[key] = {
        employeeId,
        payPeriod,
        totalPay: acc[key] ? acc[key].totalPay + totalPay : totalPay
      };
      return acc;
    },
    {}
  );
  return Object.keys(groupedByIdAndPayPeriodObj).map(key => groupedByIdAndPayPeriodObj[key]);
};
