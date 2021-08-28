const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

// setup express
const app = express();

// setup body parser middleware to conver to JSON and handle URL encoded forms
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

// connect to the mongodb database
mongoose.connect('mongodb://localhost:27017/pagliaccio', {
  useUnifiedTopology: true,
  useNewUrlParser: true
});


// import the users module and setup its API path
const users = require("./users.js");
app.use("/api/users", users.routes);


// listen on port 3000
app.listen(3000, () => console.log('Server listening on port 3000!'));

