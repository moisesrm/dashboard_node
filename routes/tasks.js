var express        = require('express')
var router         = express.Router()
var taskController = require("../controllers/taskController")

router.get('/', function(req, res, next){
  let options = { 
    title: 'Express', 
    task: taskController
  };
  res.render('tasks', options);
});


router.post('/save', function(req, res, next){
  let data = "";
  req.on('data', param => { data += param.toString(); })
    .on('end', () => {
      data = data.split("&");
      let params = {};
      for(let index in data){
        let param = data[index].split("=");
        params[param[0]] = param[1];
      }
      taskController.save(params);
    })
    .on('error', (e) => { 
      res.statusCode = 500;
      res.end("ERROR");
    });
});


module.exports = router;