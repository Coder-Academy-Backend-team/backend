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
  const { coffeeType, milkType, photo, rating, comment, cafeId } = req.body;

  const newReview = new Review({
    coffeeType,
    milkType,
    photo,
    rating,
    comment
  });

  newReview.save()
    .then(() => {
      Cafe.findById(cafeId)
        .then(cafe => {
          cafe.reviews.push(newReview._id);
          cafe.save();
        })
        .catch(err => res.status(400).json('Error: ' + err));
      res.json(newReview);
    })
    .catch(err => res.status(400).json('Error: ' + err));
}

const deleteReview = async (req, res) => {
  const { id } = req.params;
  Review.findByIdAndDelete(id)
    .then(() => res.json('Review deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
}

//find by coffee
const searchByCoffeeType = async (req, res) => {
  const { type } = req.params;
  Reviews.find({ coffeeType: type })
    .then((reviews) => {
      res.json(reviews)
    })
    .catch(err => res.status(400).json('Error: ' + err));
}

//find by cafe
const searchByCafe = async (req, res) => {
  const { name } = req.params;
  Cafe.find({ name })
    .then((cafe) => {
      res.json(cafe.reviews)
    })
    .catch(err => res.status(400).json('Error: ' + err));
};

module.exports = { index, createReview, deleteReview, searchByCafe, searchByCoffeeType };