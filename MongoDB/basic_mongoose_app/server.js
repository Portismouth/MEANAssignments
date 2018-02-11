// Require the Express Module
var express = require('express');
// Create an Express App
var app = express();
// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');
// Integrate body-parser with our App
app.use(bodyParser.urlencoded({ extended: true }));
// Require path
var path = require('path');
// Require Mongoose
var mongoose = require("mongoose");
// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, './static')));
// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './views'));
// Setting our View Engine set to EJS
app.set('view engine', 'ejs');
//Connect to MongoDB
mongoose.connect('mongodb://localhost/basic_mongoose');
// Use native promises
mongoose.Promise = global.Promise;
//Schemas
var UserSchema = new mongoose.Schema({
    name: String,
    age: Number
});
mongoose.model('User', UserSchema);
var User = mongoose.model('User');
// Routes
// Root Request
app.get('/', function (req, res) {
    // This is where we will retrieve the users from the database and include them in the view page we will be rendering.
    User.find({name: "jim"}, function(err, users) {
        if(err){
            console.log("something went wrong");
        } else {
            console.log(users)
            res.render("index");
        }
    })
})
// Add User Request 
app.post('/users', function (req, res) {
    console.log("POST DATA", req.body);
    // This is where we would add the user from req.body to the database.
    var user = new User({ name: req.body.name, age: req.body.age });
    user.save( function(err) {
        if(err) {
            console.log('something went wrong')
        } else {
            console.log('successfully added a user');
            res.redirect('/');
        }
    })
})
// Setting our Server to Listen on Port: 8000
app.listen(8000, function () {
    console.log("listening on port 8000");
})
