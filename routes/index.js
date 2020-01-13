const express = require('express');
const router = express.Router();

router.use('/cafes', require('./cafe-routes'));
router.use('/users', require('./user-routes'));

module.exports = router;

