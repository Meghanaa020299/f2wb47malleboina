var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('room', { title: 'Search Results Room' });
});

module.exports = router;
