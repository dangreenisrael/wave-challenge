const ReportHistory = require('../../models/ReportHistoryModel');

module.exports = ({id, body}) =>
  new Promise((resolve, reject) => {
    new ReportHistory();
    ReportHistory.create({id, body}, (err, doc) => {
      if (err) return reject(err);
      resolve(doc);
    });
  });
