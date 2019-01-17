var express = require('express');
var router = express.Router();

var myLogger = function (req, res, next) {
  console.log('LOGGED');
  next();
};


/* GET home page. */
router.get('/', function(req, res, next) {
  req.myLogger;
  console.log('LOGGED');
  res.render('index', { title: 'Express' });
});

router.get('/logout', function(req, res, next){
  res.redirect("/login");
});

router.get('/tasks', function(req, res, next){
  res.render('tasks', { title: 'Express' });
});

module.exports = router;
