
var modelTask = require('../models/task')

let taskModule = function () {
  var last = 0
  var first = 0
  return {
    tasks:[],
    toString: function () { return JSON.stringify(this.tasks) },
    create: function (request) {
      task = new modelTask(request.name, request.description, request.prioroty)
      task.id = 1
      if (this.last > 0) { task.id += tasks[this.last].id }
      this.last = task.id
      tasks.push(task)
    },
    update: function (request) {
      tasks.forEach(function (task) {
        if (request.id == task.id) { task.update(request) }
      })
    },
    delete: function (id) {
      let tasks = []
      this.tasks.forEach(function (task) {
        if (request.id == task.id) { return true }
        tasks.push(task)
      })
      this.tasks = tasks

    },
    all: function () { console.log(this.tasks) },
  }
}()

module.exports = taskModule