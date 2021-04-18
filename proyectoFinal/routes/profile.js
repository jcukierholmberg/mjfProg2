var express = require('express');
var router = express.Router();
const profileController = require ("../controller/profileController")

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/', profileController.profile);

router.get('/profileEdit', profileController.profileEdit);


module.exports = router;
