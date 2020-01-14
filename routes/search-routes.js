const express = require('express');
const router = express.Router();
const { searchByCoffeeType, searchByCafe } = require("../controllers/review-controller");

//here we are going to create routes
router.get("/coffee/:type", searchByCoffeeType);
router.get("/cafe/:name", searchByCafe);

module.exports = router;