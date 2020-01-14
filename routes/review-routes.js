const express = require('express');
const router = express.Router();
const { index, createReview, deleteReview } = require("../controllers/review-controller");

//here we are going to create routes
router.get('/', index);
router.post('/create', createReview);
router.delete("/delete/:id", deleteReview);

module.exports = router;
