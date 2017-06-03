module.exports = payrollRecords => {
  const groupedByIdAndPayPeriodObj = payrollRecords.reduce(
    (acc, rec) => {
      const key = `${rec.employeeId} - ${rec.payPeriod}`; // Unique key for  id/pay period
      acc[key] = acc[key] ? [...acc[key], rec] : [rec];
      return acc;
    },
    {}
  );
  return Object.keys(groupedByIdAndPayPeriodObj).map(key => groupedByIdAndPayPeriodObj[key]);
};
