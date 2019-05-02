const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/myapp', {useNewUrlParser: true});
const db = mongoose.connection;
function connect() {
	db.on('error', function(err) {console.log('Database connection error',err)});
	db.once('connected', function() {
	  console.log("connected to mongodb!");
	});
}

module.exports = connect;