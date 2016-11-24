var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Project Add' });
});

router.get('/new', function(req, res) {
  res.render('post', { title: 'Test' });
});

module.exports = router;
