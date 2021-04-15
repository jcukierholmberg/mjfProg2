var express = require('express');
var router = express.Router();

const productsController = require ("../controller/productsController");

//router.get('/', function(req, res, next) {
    //res.render('products', { title: 'Express' });
  //});



router.get('/product', productsController.product);

router.get('/productAdd', productsController.productAdd);

module.exports = router;
