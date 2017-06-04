const ReportHistory = require('../../models/ReportHistoryModel');

module.exports = id =>
  new Promise((resolve, reject) => {
    ReportHistory.findOne({where: {id}}, (err, docs) => {
      if (err) return reject(err);
      if (docs) return reject(409);
      resolve(true);
    });
  });
