const express = require('express');
const bodyParser = require('body-parser');
const mongoPractice = require('./mongoose');

// create app variable, initiates a new express server
const app = express();
const mongoose = require('mongoose');

app.use(bodyParser.json());

app.post('/uers', mongoPractice.createUser);


app.get('/users', mongoPractice.getUsers);

/* create routes
app.get('/', (req, res) => {
    res.send('We are on home');
});

app.get('/posts', (req, res) => {
    res.send('We are on posts');
});  

// connect to DB
mongoose.connect('mongodb+srv://dbuser:OOITGyDGMyyZbzEs@cluster0.riuw6.mongodb.net/Obtrax-database?retryWrites=true&w=majority', 
    () => console.log('connected to DB')
); */

// listenning to the server
app.listen(3000);