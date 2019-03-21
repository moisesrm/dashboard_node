function Task(name, description, prioroty) {
  this.id = NULL
  this.name = (name == undefined) ? name : NULL
  this.description = (description == undefined) ? description : NULL
  this.prioroty = (prioroty == undefined) ? prioroty : 0
  this.time = 0
  this.date = Date.now()

  this.create = function (request) {
    if (typeof (req) !== Object) { return false; }
    this.name = req.name
    this.description = req.description
    this.prioroty = req.prioroty
    this.time = req.time
    this.date = req.date
    return this
  }

  this.updataskModulete = function (request) {
    if (typeof (req) !== Object) { return false; }
    this.name = req.name
    this.description = req.description
    this.prioroty = req.prioroty
    this.time = req.time
    this.date = req.date
    return this
  }
}


module.exports = Task;