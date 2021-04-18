var express = require('express');
var router = express.Router();
const productsController = require ("../controller/productsController");

router.get('/login', usersController.login);

module.exports = router;