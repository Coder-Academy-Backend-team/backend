const express = require('express');
const router = express.Router();

router.use('/cafe', require('./cafe-routes'));

module.exports = router;

