const Review = require("../models/review");

const create = async (req, res) => {
  const { coffeeType, milkType, photo, rating, comment } = req.body;

  const newReview = new Review({
    coffeeType,
    milkType,
    photo,
    rating,
    comment
  });

  newReview.save()
    .then(() => res.json('Review added!'))
    .catch(err => res.status(400).json('Error: ' + err));
}

//find by coffee
const searchByCoffeeType = async (req, res) => {
  const { type } = req.params;
  Reviews.find({ coffeeType: type })
    .then((reviews) => {
      // do this
    });
}

//find by cafe
const searchByCafe = async (req, res) => {
  const { name } = req.params;
  // find reviews by cafe
};

const remove = async (req, res) => {
  const { id } = req.params;
}

module.exports = { create, remove, searchByCafe, searchByCoffeeType };