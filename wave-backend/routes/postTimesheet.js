const createTimeRecords = require('../helpers/createTimeRecords');
const duplicateCheck = require('../helpers/duplicateCheck');
const addReportToHistory = require('../helpers/addReportToHistory');
const babyParse = require('babyparse');
module.exports = (req, res) => {
  if (!req.files) return res.status(400).send('No files were uploaded.');
  let csv = req.files.timesheet.data.toString().trim();
  const {data} = babyParse.parse(csv);
  data.shift(); // Strip headings
  const id = data.pop()[1];
  duplicateCheck(id)
    .then(() => {
      addReportToHistory({id, body: csv})
        .then(() => createTimeRecords(data))
        .then(data => res.send(data))
        .catch(err => res.status(500).send(err));
    })
    .catch(code => {
      if (code === 409) {
        res.status(409).send('Duplicate');
      } else {
        res.status(500).send('Server Error');
      }
    });
};
