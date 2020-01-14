const express = require('express');
const router = express.Router();

const { index, /*create, deleteCafe,*/ findOneCafe, findCafeByName, findCafeByLocation } = require("../controllers/cafe-controllers");

//here we are going to create routes

router.get('/', index);
// router.post('/create', create);
// router.delete('/delete/:id', deleteCafe);
router.get('/:id', findOneCafe);
router.get('/name/:name', findCafeByName);
router.get('/location/:location', findCafeByLocation);
// router.get('/coffee/:type', findCafeByCofeeType);

module.exports = router;