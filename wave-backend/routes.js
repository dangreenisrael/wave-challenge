const router = require('express').Router({mergeParams: true});
const morgan = require('morgan');
const fileUpload = require('express-fileupload');
const postTimesheet = require('./routes/postTimesheet');
router.use(fileUpload());
router.use(morgan('dev'));

router.post('/timesheets', postTimesheet);

module.exports = router;
