var mongoose = require('mongoose');

var ProjectSchema = mongoose.Schema({
  title: String,
  description: String,
  due: String,
  status: String,
  tasks: Array,
  comments: Array,
  attachments: Array
});

var Project = mongoose.model('Project', ProjectSchema);

module.exports = Project;
