const express = require('express');

// const connect = require('./database.js');

const app = express();

app.get('/',function(request, response){
	response.send('Hello World');
})

app.get('/student',function(req, res){
	res.send({name: ['Ram',"Shyam"],roll:3});
})

app.post('/students',function(request, response){
	student = request.body;
	console.log(request);
	response.send('created user');
})

app.listen(3000,function(){
	console.log('Server running at localhost:'+3000);
})

// connect()