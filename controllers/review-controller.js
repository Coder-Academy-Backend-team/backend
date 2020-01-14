const Review = require("../models/review");
const Cafe = require("../models/cafe");

const getReview = async (reviewId) => {
  const review = await Review.findById(reviewId);
  return review;
}

const getCafe = async (cafeId) => {
  const cafe = await Cafe.findById(cafeId);
  return cafe;
}

const getCafesForReviews = async (reviewArray) => {
  reviewArray = reviewArray.map(async review => {
    const foundCafe = await getCafe(review.cafe);
    const object = {
      review: review,
      cafe: foundCafe
    }
    return object;
  })
  const array = await Promise.all(reviewArray);
  return array;
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

//find by coffee
const searchByCoffeeType = async (req, res) => {
  const { type } = req.params;
  try {
    let reviews = await Review.find({ coffeeType: type });
    res.json(await getCafesForReviews(reviews));
  }
  catch (err) { res.status(400).send('Error: ' + err); }
}

//find by cafe
const searchByCafe = async (req, res) => {
  const { name } = req.params;
  try {
    const cafe = await Cafe.findOne({ name });
    const reviewsArray = cafe.reviews.map(getReview);
    const array = await Promise.all(reviewsArray);
    res.json({
      cafe: cafe,
      reviews: array
    });
  }
  catch (err) { res.status(400).send('Error: ' + err) }
}

// for admin
const allReviews = async (req, res) => {
  let reviews = await Review.find().sort("-createdAt");
  res.json(await getCafesForReviews(reviews));

  return res;
}

// for admin
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

module.exports = { createReview, deleteReview, searchByCafe, searchByCoffeeType, getCafesForReviews, allReviews };