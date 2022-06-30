require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');
// require('dotenv/config');

// Middlewares
// app.use(auth);

// Import routes
const postsRoute = require('./routes/posts');
const connectToDatabase = require("./database");

connectToDatabase();

app.use('/posts', postsRoute)

//Routes
app.get('/', (req, res) => {
    res.send('We are on home');
});

app.listen(3000);