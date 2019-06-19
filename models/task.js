var mongoose = require('./model');

var taskSchema = new mongoose.Schema({  
  name: { type: String, required: true },
  description: String,  
  priority: { type: Number, default: 0 },
  time: Number,
  date: { type: Date, default: new Date() },
});  

taskSchema.methods.toString = function(){
  return `Task: ${this.name}\n
    Description: ${this.description}\n
    Priority: ${this.priority}\n
    Expected Time: ${this.time}\n
    Start Date: ${this.date}`;
}

module.exports = mongoose.model('Task', taskSchema);