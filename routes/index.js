var express = require('express');
var router = express.Router();

var myLogger = function (req, res, next) {
  console.log('LOGGED');
  next();
};


/* GET home page. */
router.get('/', function(req, res, next) {
  req.myLogger;
  res.render('index', { title: 'Express' });
});

router.get('/logout', function(req, res, next){
  res.redirect("/login");
});


router.get('/chat', function(req, res, next){
  res.render('chat', { title: 'Express' });
});

router.get('/profile', function(req, res, next){
  res.render('profile', { title: 'Express' });
});

module.exports = router;
