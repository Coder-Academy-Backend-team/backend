const express = require('express');
const router = express.Router();
const { createReview, deleteReview, allReviews } = require("../controllers/review-controller");

//here we are going to create routes
router.get('/all', allReviews);
router.post('/create', createReview);
router.delete("/delete/:id", deleteReview);

module.exports = router;
