const express = require('express');
const router = express.Router();

router.use('/cafe', require('./cafe-routes'));
router.use('/user', require('./user-routes'));

module.exports = router;

