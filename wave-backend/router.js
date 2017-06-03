const router = require('express').Router({mergeParams: true});
const morgan = require('morgan');
const fileUpload = require('express-fileupload');
const postTimesheet = require('./routes/postTimesheet');
const getPayrollReport = require('./routes/getPayrollReport');

router.use(fileUpload());
router.use(morgan('dev'));

router.post('/timesheets', postTimesheet);
router.get('/payroll-report', getPayrollReport);

module.exports = router;
