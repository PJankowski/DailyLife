var mongoose = require('mongoose');

var AttachmentSchema = mongoose.Schema({
  project_id: String,
  url: String,
  filename: String
});

var Attachment = mongoose.model('Attachment', AttachmentSchema);

module.exports = Attachment;
