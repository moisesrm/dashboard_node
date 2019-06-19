const Task = require('../models/task');
const taskMock = require('../mocks/taskMock');
const taskController = require('../controllers/taskController');

beforeAll(() => Task.deleteMany({}));
describe("Test if controller can",function(){
  it("create a mock task",function(){
    let response;
    let cb = { end: function(data){ response = data; } }
    taskController.create(taskMock, cb);
    expect(response).toBe(undefined)
  });
});

describe("Test if controller can",function(){
  let response;
  let request = {
    query: {name: taskMock.name},
    update: { description: "Edit"},
  };

  let cb = { end: function(data){ response = data; } }
  taskController.edit(request, cb);
  it("update mock task",() => expect(response).toBe(1));
});

describe("Test if controller can",function(){
  let response;
  let request = {name: taskMock.name};

  let cb = { end: function(data){ response = data;} }
  taskController.delete(request, cb);
  it("delete mock task",() => expect(response).toBe(1));
});

describe("Test if controller can",function(){
  let response;
  let request = {name: taskMock.name};
  let cb = { end: function(data){ response = data;} }
  taskController.list(request, cb);
  it("bring all tasks",() => expect(response instanceof Array).toBe(true));
  it("bring at least one task",() => expect(response.length).toBeGreaterThan(0));
});

describe("Test if controller",function(){
  let response;
  let request = {name: taskMock.name};
  let cb = { end: function(data){ response = data; } }
  taskController.find(request, cb);
  
  it("can bring an doc",() => expect(response instanceof Object).toBe(true));
  it("cannot find mock task",() => expect(response).not.toBe(undefined));
});


