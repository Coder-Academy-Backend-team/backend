const express = require('express');
const router = express.Router();

const { index, create } = require("../controllers/review-controller");
//here we are going to create routes
router.get('/', index);
router.post('/create', create);

 module.exports = router;
//add review
router.post('/add', (req, res)=> {
    const name = req.body.name;
    const location = req.body.location;
    const rating = req.body.rating;
    const description = req.body.description;
    const link = req.body.link;

    const newReview = new Review({
        name,
        location,
        rating,
        description,
        link,
    })

    newReview.save()
    .then(()=>res.json('Review added!'))
    .catch(err=> res.status(400).json('Error: ' + err));
})
//find by coffee



//find by cafe



