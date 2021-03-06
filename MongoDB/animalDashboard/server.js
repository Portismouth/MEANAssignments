var express = require("express");
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
var path = require('path');
// Require Mongoose
var mongoose = require("mongoose");
// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, './client/static')));
// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './client/views'));
// Setting our View Engine set to EJS
app.set('view engine', 'ejs');
//Connect to MongoDB
mongoose.connect('mongodb://localhost/animals');
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