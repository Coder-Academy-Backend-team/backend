const express = require('express');
const router = express.Router();

router.use('/cafes', require('./cafe-routes'));
router.use('/users', require('./user-routes'));
router.use("/reviews", require("./review-routes"));
router.use("/search", require("./search-routes"));

router.get("/", (req, res) => {
  res.send("testing")
})

module.exports = router;
