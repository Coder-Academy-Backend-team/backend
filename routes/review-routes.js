const express = require('express');
const router = express.Router();
const middleware = require('../routes/token_middleware');
const { createReview, deleteReview, allReviews } = require("../controllers/review-controller");

//here we are going to create routes
router.get('/all', allReviews);
router.post('/create', middleware.checkToken, createReview);
router.delete("/delete/:id", middleware.checkToken, deleteReview);

module.exports = router;
