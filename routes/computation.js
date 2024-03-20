var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    let x= Math.random()*100;
    let y = Math.exp(x);
  res.send(`exp of ${x} is ${y}`);
});

module.exports = router;
