const mongoose = require('mongoose');
const schema = mongoose.Schema;

const blogSchema = new schema({
	Book_name: String,
	Author: String,
	Title: String
});
const Blog = mongoose.model('Blog',BlogSchema);

var blog = new Blog({Book_name: 'Harry Potter',
	Author: 'J.K Rowling',
	Title: 'Deathly Hallows'});
blog.save(function (err,createBlog){
	if (err) {
		return console.log(err);
	}
	else console.log('created',createBlog);
}) 
module.exports = Blog;