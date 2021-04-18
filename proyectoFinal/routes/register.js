var express = require('express');
var router = express.Router();
const registerController = require ("../controller/registerController");


router.get('/register', registerController.register);

module.exports = router;