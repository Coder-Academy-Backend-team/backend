const Review = require("../models/review");
const mongoose = require('mongoose');

const SEARCH_LIMIT = 6;

const index = async (req, res) => {
  const query = await Review.find().sort("-createdAt").limit(SEARCH_LIMIT);
  query instanceof mongoose.Query;
  const docs = await query;
  res.send(docs);

  return res;
}

module.exports = index;