
var Task = require('../models/task')

let taskController = (function(){
  return {
    create: (req, res) => Task.create(req, function(err, doc){ res.end(doc); }),
    edit: (req, res) => Task.updateOne(req.query, req.update, (err, raw) => res.end(raw.ok)),
    delete: (req, res) => Task.deleteOne(req.query, (err) => res.end((err) ? 0 : 1)),
    list: (req, res) => Task.find({}, (err, tasks) => res.end(tasks)),
    find: (req, res) => Task.find(req, (err,task) => res.end(task))
  }
})();

module.exports = taskController;