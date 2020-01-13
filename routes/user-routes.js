const express = require('express');
const router = express.Router();

const { index, createUser, deleteUser, findOneUser } = require("../controllers/user-controllers");




router.get('/', index);
router.post('/create', createUser);
router.delete('/delete/:id', deleteUser);
router.get('/:id', findOneUser)

module.exports = router;