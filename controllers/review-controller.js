const Review = require("../models/review");
const Cafe = require("../models/cafe");
const mongoose = require('mongoose');

const index = async (req, res) => {
  const query = await Review.find({});
  query instanceof mongoose.Query;
  const docs = await query;
  res.send(docs);

  return res;
}

const createReview = async (req, res) => {
  const { coffeeType, milkType, photo, rating, comment, cafe } = req.body;

  const newReview = new Review({
    coffeeType,
    milkType,
    photo,
    rating,
    comment,
    cafe
  });

  try {
    await newReview.save();
    const cafeObject = await Cafe.findById(cafe);
    cafeObject.reviews.push(newReview._id);
    cafeObject.save();

    res.json(newReview);
  }
  catch (err) { res.status(400).send('Error: ' + err); }
}

const deleteReview = async (req, res) => {
  const { id } = req.params;

  try {
    const review = await Review.findById(id);
    const cafe = await Cafe.findById(review.cafe);
    const index = cafe.reviews.indexOf(id);
    cafe.reviews.splice(index, 1);
    cafe.save();
    review.remove();
    res.send('Review deleted.');
  }
  catch (err) { res.status(400).send('Error: ' + err); }
}

//find by coffee
const searchByCoffeeType = async (req, res) => {
  const { type } = req.params;
  try {
    const reviews = await Review.find({ coffeeType: type });
    res.json(reviews);
  }
  catch (err) { res.status(400).send('Error: ' + err); }
}

const getReview = async (reviewId) => {
  const review = await Review.findById(reviewId);
  return review;
}

//find by cafe
const searchByCafe = async (req, res) => {
  const { id } = req.params;
  try {
    const cafe = await Cafe.findById(id)
    const reviewsArray = cafe.reviews.map(getReview);
    const array = await Promise.all(reviewsArray)
    res.json(array);
  }
  catch (err) { res.status(400).send('Error: ' + err) }
}

module.exports = { index, createReview, deleteReview, searchByCafe, searchByCoffeeType };