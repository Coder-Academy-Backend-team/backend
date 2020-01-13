const express = require('express');
const router = express.Router();
const { index, createReview, deleteReview, searchByCoffeeType, searchByCafe } = require("../controllers/review-controller");

//here we are going to create routes
router.get('/', index);
router.post('/create', createReview);
router.delete("/delete/:id", deleteReview);
router.get("/search/coffee/:type", searchByCoffeeType);
router.get("/search/cafe/:name", searchByCafe);

module.exports = router;
