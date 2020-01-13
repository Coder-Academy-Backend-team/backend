const express = require('express');
const router = express.Router();

const { index, create, deleteCafe, findOneCafe } = require("../controllers/cafe-controllers");
//here we are going to create routes

// find all cafe
router.get('/', index);
router.post('/create', create);
router.delete('/delete/:id', deleteCafe);
router.get('/:id', findOneCafe)


//add cafe
// router.post('/create', (req, res)=> {
//     const { name, location, websiteURL, reviews } = req.body.name;

//     const newCafe = new Cafe({
//         name,
//         location,
//         websiteURL,
//         reviews
//     })

//     newCafe.save()
//     .then(()=>res.json('Cafe added!'))
//     .catch(err=> res.status(400).json('Error: ' + err));
// });

// router.delete();
// router.delete('/:id', (req, res)=> {
//     Cafe.findByIdAndDelete(req.params.id)
//     .then(()=> res.json('Cafe deleted.'))
//     .catch(err => res.status(400).json('Error: ' + err));
//   });

// find one cafe
// router.get('/:id', (req, res)=> {
//     Cafe.findById(req.params.id)
//     .then(recipe => res.json(recipe))
//     .catch(err => res.status(400).json('Error: ' + err));
//   })


module.exports = router;
