const Review = require("../models/review");
// const Cafe = require("../models/cafe");
const mongoose = require('mongoose');

const index = async (req, res) => {
  const query = await Review.find({});
  query instanceof mongoose.Query;
  const docs = await query;
  res.send(docs);

  return res;
}

module.exports = index;