const express = require('express');
const router = express.Router();

const { index, create, deleteCafe, findOneCafe } = require("../controllers/cafe-controllers");

//here we are going to create routes

router.get('/', index);
// router.post('/create', create);
// router.delete('/delete/:id', deleteCafe);
router.get('/:id', findOneCafe)


module.exports = router;
