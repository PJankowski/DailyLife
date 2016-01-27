var Project = require('../models/projects');

exports.getAll = function(req, res) {
  Project.find({}, function(err, projects) {
    if (err) {
      res.status(500).json(err);
    } else {
      res.status(200).json(projects);
    }
  });
};

exports.create = function(req, res) {
  var project = new Project(req.body);

  project.save(function(err, newProject){
    if (err) {
      res.status(500).json(err);
    } else {
      res.status(200).json(newProject);
    }
  });
};
