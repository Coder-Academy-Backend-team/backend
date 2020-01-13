const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    coffeeType: String,
    milkType: String,
    photo: String,
    rating: Number,
    comment: String
},
{ timestamps: true}
);

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;