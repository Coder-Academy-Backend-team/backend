const Review = require('../models/review');
const mongoose = require('mongoose');

const index = async (req, res) => {
  const query = await Review.find({});
  query instanceof mongoose.Query;
  const docs = await query;
  res.send(docs);

  return res;
}

const create = async(req, res) => {
  console.log("Test...");
  const { reviewer, cafe, coffeeType, milkType, photo, rating, comment } = req.body;

    const newReview = new Review({
        reviewer,
        cafe,
        coffeeType,
        milkType,
        photo,
        rating,
        comment
    })

    newReview.save()
    .then(()=>res.json('Review added!'))
    .catch(err=> res.status(400).json('Error: ' + err));
}

const deleteReview = async (req, res)=> {
  
  Review.findByIdAndDelete(req.params.id)
  .then(()=> res.json('Review deleted.'))
  .catch(err => res.status(400).json('Error: ' + err));
};

const findOneReview = async (req, res)=> {
  console.log("Review id: ", req.params.id);
  
  Review.findById(req.params.id)
  .then(cafe => res.json(cafe))
  .catch(err => res.status(400).json('Error: ' + err));
};

module.exports = { index, create, deleteReview, findOneReview }