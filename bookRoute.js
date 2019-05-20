const express = require('express');

const router = express.Router();
const Book = require('./schema.js');

router.get('/books',(req,res) => {
    Book.find(function(err, bookList) {
        if(err) res.send({error: err.message})
        res.send(bookList)
    })
});

router.post('/books',(req,res) => {
    const data = req.body;
    Book.create(data, (err, createData)=> {
        if(err) res.send({error: err.message})
        res.send(createData)
    })
   
});

/// Addding new things

// router.put('/books/:title', (req,res) => {
// const title = req.body.userId;

// })

// router.get('/', (req,res) => {
//     res.send('<h1> Hello </h1>');
//     res.end();
// })

module.exports = router;