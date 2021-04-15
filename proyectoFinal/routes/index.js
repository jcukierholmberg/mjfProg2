var express = require('express');
var router = express.Router();

const indexController = require ("../controller/indexController")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/index', indexController.index);

router.get('/login', indexController.login);

router.get('/search', indexController.search);

router.get('/headerLogueado', indexController.headerLogueado);

//router.get('/product', indexController.product);

//router.get('/productAdd', productsController.productAdd);

//router.get('/login', usersController.login);

//router.get('/profile', usersController.profile);

//router.get('/register', usersController.register);

//router.get('/profileEdit', usersController.profileEdit);

module.exports = router;
