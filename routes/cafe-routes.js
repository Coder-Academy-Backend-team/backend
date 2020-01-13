const express = require('express');
const router = express.Router();

const { index, create } = require("../controllers/cafe-controllers");
//here we are going to create routes
router.get('/', index);
router.post('/create', create);

 module.exports = router;

//add cafe
router.post('/create', (req, res)=> {
    const { name, location, websiteURL, reviews } = req.body.name;

    const newCafe = new Cafe({
        name,
        location,
        websiteURL,
        reviews
    })

    newCafe.save()
    .then(()=>res.json('Cafe added!'))
    .catch(err=> res.status(400).json('Error: ' + err));
});

// router.delete();
router.delete()

// find all cafe

// find one cafe

//

module.exports = router;