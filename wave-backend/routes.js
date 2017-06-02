const router = require('express').Router({mergeParams: true});
const morgan = require('morgan');
const fileUpload = require('express-fileupload');
const babyParse = require('babyparse');
router.use(fileUpload());
router.use(morgan('dev'));

router.get('/hello', (req, res) => {
  res.send('world');
});

router.post('/timesheets', (req, res) => {
  if (!req.files) return res.status(400).send('No files were uploaded.');
  let csv = req.files.timesheet.data.toString();
  let {data} = babyParse.parse(csv);
  res.send(data);
});

module.exports = router;
