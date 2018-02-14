var express = require("express");
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.json());
var path = require('path');
// Require Mongoose
var mongoose = require("mongoose");
// Setting our View Engine set to EJS
app.set('view engine', 'ejs');
// Use native promises
mongoose.Promise = global.Promise;
require('./server/config/mongoose.js');
//Set routes
var routes_setter = require('./server/config/routes.js');
routes_setter(app);
// Setting our Server to Listen on Port: 8000
app.listen(8000, function () {
    console.log("listening on port 8000");
});