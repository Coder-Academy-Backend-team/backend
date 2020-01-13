const express = require('express');
const router = express.Router();

const { index, create } = require("../controllers/review-controller");
//here we are going to create routes
router.get('/', index);
router.post('/create', create);

module.exports = router;



//add review
router.post('/add', (req, res) => {
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
})

//find by coffee
router.get("/search/coffee/:type", (req, res) => {
    const { type } = req.params;
    Reviews.find({ coffeeType: type })
        .then((reviews) => {
            // do this
        });
});

//find by cafe
router.get("/search/cafe/:name", (req, res) => {
    const { name } = req.params;
    // find reviews by cafe
});

router.delete("/delete/:id", (req, res) => {
    const { id } = req.params;
})