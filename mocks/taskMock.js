var Task = require("../models/task.js");

const taskMock = new Task({
  name: "Mocking tests",
  description: "Create a mock for use in tests",
  priority: 10,
  time: 10,
  date: new Date()
});

module.exports = taskMock;