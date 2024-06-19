const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
    email: String,
    password: Number 
});

const Account = mongoose.model('account', accountSchema);

module.exports = Account;