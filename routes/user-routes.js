const express = require('express');
const router = express.Router();
const middleware = require('../routes/token_middleware');

const { index, createUser, deleteUser, findOneUser, login } = require("../controllers/user-controllers");




router.get('/', index);
router.post('/create', createUser);
router.delete('/delete/:id', middleware.checkToken, deleteUser);
router.get('/:id', middleware.checkToken, findOneUser);
router.post('/login', login);

module.exports = router;