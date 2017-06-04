const {
  createTimeRecords,
  duplicateCheck,
  addReportToHistory,
  parseReportFromCSV
} = require('../modules/timesheets');

module.exports = (req, res) => {
  const {timesheet} = req.files;
  if (!timesheet) return res.status(400).json({error: 'No files were uploaded.'});
  if (timesheet.mimetype !== 'text/csv') return res.status(400).json({error: 'Not a CSV'});
  let csv = timesheet.data.toString().trim();
  const {data, reportId} = parseReportFromCSV(csv);
  duplicateCheck(reportId)
    .then(() => {
      addReportToHistory({id: reportId, body: csv})
        .then(() => createTimeRecords(data))
        .then(data => res.send(data))
        .catch(err => res.status(500).json(err));
    })
    .catch(code => {
      if (code === 409) {
        res.status(409).json({error: 'Duplicate'});
      } else {
        res.status(500).json({error: 'DB Error'});
      }
    });
};
