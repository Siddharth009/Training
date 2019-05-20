const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');

const app = express();

const Routes = require('./bookRoute');
const db = require('./database.js');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/', function(req,res) {
    res.render('index');
});


let Book = require('./schema.js');



app.use(bodyParser.json());

app.use(Routes);


// Check for Db errors
db.on('error', (err) => console.log(err))

// check connection
db.once('open', () =>  {
    console.log("connected to mongodb")
    app.listen(3001,() => console.log("server running at 3001"));
});

