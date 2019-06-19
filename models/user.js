var mongoose = require('./model');

var userSchema = new mongoose.Schema({  
  name: { type: String, required: true },
  login:{ type: String, required: true },
  pwd:  { type: String },
  active: { type: Number, default: 1 },
});  

userSchema.statics.fetchAll = function(cb){
  return this.find({}, cb);
}

module.exports = mongoose.model('User', userSchema);