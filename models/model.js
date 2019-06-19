

var mongoose = require('mongoose');
var url = "mongodb://172.19.0.2:27017/mydb";
mongoose.connect(url, { keepAlive: true, useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {});

module.exports = mongoose;