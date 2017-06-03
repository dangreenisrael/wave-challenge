const getPayAmount = require('./getPayAmount');
const formatPayPeriod = require('./formatPayPeriod');
const groupByIdAndPayPeriod = require('./groupByIdAndPayPeriod');
const getTotalsPerPersonPerTimePeriod = require('./getTotalsPerPersonPerTimePeriod');
module.exports = {
  getPayAmount,
  formatPayPeriod,
  groupByIdAndPayPeriod,
  getTotalsPerPersonPerTimePeriod
};
