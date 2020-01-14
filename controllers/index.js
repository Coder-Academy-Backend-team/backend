const Review = require("../models/review");
const { getCafesForReviews } = require("./review-controller");

const SEARCH_LIMIT = 6;

const index = async (req, res) => {
  let reviews = await Review.find().sort("-createdAt").limit(SEARCH_LIMIT);
  res.json(await getCafesForReviews(reviews));
}

module.exports = index;