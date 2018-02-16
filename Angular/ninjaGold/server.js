var session = require("express-session");
var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

var app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(__dirname + '/ngNinjaGold/dist'));

//DB Connection
mongoose.connect('mongodb://localhost/ninja_gold');
mongoose.Promise = global.Promise;
require('./server/config/mongoose.js');

//Route setter
var routes_setter = require('./server/config/routes.js');
routes_setter(app);

// Setting our Server to Listen on Port: 8000
app.listen(8000, function () {
    console.log("listening on port 8000");
});