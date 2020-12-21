const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
//const mongoPractice = require('./mongoose');
const cors = require('cors');
require('dotenv').config();

// create app variable, initiates a new express server
const app = express();

// Connect to database
mongoose.connect(
    process.env.DB_CONNECTION, 
    { useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log('Connected to database!')
    }).catch(() => {
        console.log('Connection failed!')
    });


// Middlewares
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(bodyParser.json());


// Routes
const userRoutes = require("./routes/users");
app.use("/api/v1/users", userRoutes);

const symptomRoutes = require("./routes/symptoms");
app.use("/api/v1/symptoms", symptomRoutes);


//app.post('/uers', mongoPractice.createUser);

//app.get('/users', mongoPractice.getUsers);


// listenning to the server
app.listen(3000);
