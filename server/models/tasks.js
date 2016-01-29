var mongoose = require('mongoose');

var TaskSchema = mongoose.Schema({
  project_id: String,
  text: String,
  due: String
});

var Task = mongoose.model('Task', TaskSchema);

module.exports = Task;
