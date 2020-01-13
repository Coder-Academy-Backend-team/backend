const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const cafeSchema = new Schema({
    name: String,
    image: String,
    location: String,
    websiteURL: String,
    reviews: Array    
},
{
    collection: 'cafes'
});

const Cafe = mongoose.model("Cafe", cafeSchema);

module.exports = Cafe;