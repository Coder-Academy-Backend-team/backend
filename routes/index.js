const express = require('express');
const router = express.Router();

router.use('/cafe', require('./cafe-routes'));
router.use("/reviews", require("./review-routes"));


router.get("/", (req, res) => {
  res.send("testing")
})

module.exports = router;
