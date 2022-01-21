const mongoose = require('mongoose');

const docSchema = new mongoose.Schema({
  subject: {
    type: String,
    required: true,
  },
  LinkDrive: {
    type: String,
    required: true,
  },
  teacher: {
    type: String,
    required: true,
  },
  DOC: {
    type: String,
    required: true,
  },
});

const Doc = mongoose.model('Doc', docSchema);
module.exports = Doc;
