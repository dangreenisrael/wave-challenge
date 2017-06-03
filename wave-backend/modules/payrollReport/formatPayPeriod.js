const moment = require('moment');

module.exports = nativeDate => {
  const date = moment(nativeDate);
  const isFirstHalf = date.date() <= 15;
  const format = 'DD/MM/YYYY';
  const startDate = isFirstHalf ? date.date(1).format(format) : date.date(16).format(format);
  const endDate = isFirstHalf ? date.date(15).format(format) : date.endOf('month').format(format);
  return `${startDate} - ${endDate}`;
};
