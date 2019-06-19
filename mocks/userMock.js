var User = require("../models/user.js");

const userMock = new User({
  name: "Moises Machado",
  login: "moises",
  pwd: "1234",
  active:1,
});

module.exports = userMock;