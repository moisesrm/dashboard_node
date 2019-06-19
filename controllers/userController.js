
var User = require('../models/user')

let userController = (function () {
  return {
    create: (req,res) => User.create(req, (err, doc) => res.end(doc))
  }
})();

module.exports = userController;