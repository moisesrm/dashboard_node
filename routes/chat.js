var express = require('express');
var router = express.Router();

//GLOBAL

/* GET chat page. */
router.get('/', function(req, res, next) {
  res.render('chat', { title: 'Chat' });
});

module.exports = router;
