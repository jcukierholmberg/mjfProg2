var express = require('express');
var router = express.Router();
const loginController = require ("../controller/loginController");

router.get('/login',loginController.login);

module.exports = router;