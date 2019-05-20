const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/sid', {useNewUrlParser: true});

module.exports = mongoose.connection;