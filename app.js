require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env.PORT || 3000;

// Middlewares
app.use(cors());

app.use(bodyParser.json());

// Import routes
const postsRoute = require('./routes/posts');
const connectToDatabase = require("./database");

connectToDatabase();

app.use('/posts', postsRoute)

//Routes
app.get('/', (req, res) => {
    res.send('We are on home');
});

app.listen(port);