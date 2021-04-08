var express = require('express');
var router = express.Router();

const indexController = require ("../controllers/indexController")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/index', indexController.index);

router.get('/login', indexController.login);

router.get('/product', indexController.product);

router.get('/profile', indexController.profile);

router.get('/register', indexController.register);

router.get('/search', indexController.search);

router.get('/productAdd', indexController.productAdd);

router.get('/profileEdit', indexController.profileEdit);

router.get('/headerLogueado', indexController.headerLogueado);

//router.get('/error', indexController.error);

module.exports = router;
