const express = require('express');
const router = express.Router();
const { create, remove, searchByCoffeeType, searchByCafe } = require("../controllers/review-controller");

//here we are going to create routes
router.get('/', index);
router.post('/create', create);
router.get("/search/coffee/:type", searchByCoffeeType);
router.get("/search/cafe/:name", searchByCafe);
router.delete("/delete", remove);

module.exports = router;
