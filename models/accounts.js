const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
  AccountAdmin: {
    type: String,
    required: true,
    unique: true,
  },
});

const Account = mongoose.model('Account', accountSchema);
module.exports = Account;
