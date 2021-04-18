var express = require('express');
var router = express.Router();

const indexController = require ("../controller/indexController")

router.get('/index', indexController.index);

module.exports = router;
