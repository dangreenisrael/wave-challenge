const ReportHistory = require('../../models/ReportHistoryModel');

module.exports = id =>
  new Promise((resolve, reject) => {
    ReportHistory.findOne({where: {id}}).then(docs => {
      if (docs) return reject(409);
      resolve(true);
    });
  });
