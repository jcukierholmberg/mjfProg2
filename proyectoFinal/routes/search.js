var express = require('express');
var router = express.Router();
const productsController = require ("../controller/productsController");

router.get('/search', indexController.search);

module.exports = router;