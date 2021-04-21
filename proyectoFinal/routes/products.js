var express = require('express');
var router = express.Router();
const productsController = require ("../controller/productsController");


router.get('/:id', productsController.product);

router.get('/productAdd/:id', productsController.productAdd);

module.exports = router;
