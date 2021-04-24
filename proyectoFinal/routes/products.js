var express = require('express');
var router = express.Router();
const productsController = require ("../controller/productsController");


router.get('/:id', productsController.product);

router.get('/productAdd', productsController.productAdd);

router.get ("/allProducts/:id", productsController.allProducts);

module.exports = router;
