var express = require('express');
var router = express.Router();
const productsController = require ("../controller/productsController");


router.get('/register', usersController.register);

module.exports = router;