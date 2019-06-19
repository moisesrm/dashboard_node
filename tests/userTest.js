const User = require('../models/user');
const userMock = require('../mocks/userMock');
const userController = require('../controllers/userController');

beforeAll(() => User.deleteMany({}));

describe("Test if controller ", function(){
  it("can create", function(){ 
    let response;
    let cb = { end: (data) => response = data };
    User.create(userMock, cb);
    expect(response instanceof Object).toBe(true);
  })
});

describe("Test if controller ", function(){
  it("can edit", function(){ 
    let response;
    let request = {
      query: {id: userMock._id},
      update: {nome: "Moises Teste"}
    }
    let cb = { end: (data) => response = data };
    User.edit(request, cb);
    expect(response).toBe(1);
  })
});

describe("Test if controller ", function(){
  it("can edit", function(){ 
    let response;
    let request = {
      query: {id: userMock._id},
    }
    let cb = { end: (data) => response = data };
    User.delete(request, cb);
    expect(response).toBe(1);
  })
});