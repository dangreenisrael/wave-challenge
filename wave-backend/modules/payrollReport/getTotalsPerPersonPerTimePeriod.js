module.exports = groupedByIdAndPayPeriod => {
  const reduceEachGroup = eachGroup =>
    eachGroup.reduce(
      (acc, record) => {
        const {employeeId, payPeriod, totalPaid} = record;
        return {
          employeeId,
          payPeriod,
          totalPaid: acc.totalPaid ? acc.totalPaid + totalPaid : totalPaid
        };
      },
      {}
    );
  return groupedByIdAndPayPeriod.map(reduceEachGroup);
};
