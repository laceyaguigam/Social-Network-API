// required to connect them
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');


const app = express();
const PORT = process.env.PORT || 3001;

// this is the middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);


//tells mongoose which database to connect to
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/social-network-api', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Use this to log mongo queries being executed!
mongoose.set('debug', true);




