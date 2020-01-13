const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    coffeeType: 
    {
        type: String,
        required: true
    },
    milkType: 
    {
        type: String,
        required: true
    },
    photo:
    {
        type: String,
        required: true
    },
    rating:
    {
        type: Number,
        required: true
    },
    comment: 
    {
        type: String,
        required: true,
        minlength: 4,
        maxlength: 500
    }
},
{ timestamps: true}
);

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;