const ReportHistory = require('../../models/ReportHistoryModel');

module.exports = ({id, body}) => {
  new ReportHistory();
  return ReportHistory.create({id, body});
};
