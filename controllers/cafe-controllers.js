const Cafe = require('../models/Cafe');
const mongoose = require('mongoose');

const index = async (req, res) => {
  const query = await Cafe.find({});
  query instanceof mongoose.Query;
  const docs = await query;
  res.send(docs);

  return res;
}

const create = async(req, res) => {
  console.log("Test...");
  const { name, location, websiteURL, reviews } = req.body;
  console.log(name, location, websiteURL, reviews);

  const newCafe = new Cafe({name, location, websiteURL, reviews})

  const savedCafe = await newCafe.save();
  res.send(savedCafe);
}

module.exports = { index, create }