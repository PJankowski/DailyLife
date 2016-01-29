var Task = require('../models/tasks');

exports.getAll = function(req, res) {
  var _id = req.params.id;
  Task.find({project_id: _id}, function(err, tasks){
    if (err) {
      res.status(500).json(err);
    } else {
      res.status(200).json(tasks);
    }
  });
};

exports.create = function(req, res) {
  var task = new Task(req.body);

  task.save(function(err, newTask){
    if (err) {
      res.status(500).json(err);
    } else {
      res.status(200).json(newTask);
    }
  });
};
