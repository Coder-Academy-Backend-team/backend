const express = require('express');
const router = express.Router();

const { index, create } = require("../controllers/review-controller");
//here we are going to create routes
router.get('/', index);
router.post('/create', create);

 module.exports = router;

//add cafe
router.post('/create', (req, res)=> {
    const { name, location, rating, description, link } = req.body.name;

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
});

// router.delete();


// find all cafe
router
// find one cafe

//