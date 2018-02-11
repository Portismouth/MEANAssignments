var express = require("express");
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
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
mongoose.connect('mongodb://localhost/animals');
// Use native promises
mongoose.Promise = global.Promise;

//Schemas
var dogSchema = new mongoose.Schema({
    name: String,
    type: String,
    favorite_food: String
}, {timestamps: true} );

//Models
mongoose.model("Dog", dogSchema);
var Dog = mongoose.model("Dog");

//Get routes
app.get('/', function (req, res) {
    Dog.find({}, function (err, dogs) {
        if (err) {
            console.log("somethin ain't right")
            res.redirect("/")
        } else {
            console.log(dogs)
            res.render("index", { Dogs: dogs })
        }
    });
});

app.get("/dog/new", function(req, res) {
    res.render("new");
});

app.get("/dog/:id", function (req, res){
    Dog.findOne({ _id: req.params.id }, function (err, dog) {
        if (err) {
            console.log("somethin ain't right")
            res.redirect("/")
        } else {
            console.log(dog)
            res.render( "show", { Dog: dog } ) 
        }
    });
});

app.get("/dog/edit/:id", function (req, res) {
    Dog.findOne({ _id: req.params.id }, function (err, dog) {
        if (err) {
            console.log("somethin ain't right")
            res.redirect("/")
        } else {
            console.log(dog)
            res.render("edit", { Dog: dog })
        }
    });
});

app.get("/dog/delete/:id", function (req, res) {
    Dog.remove({_id: req.params.id}, function (err) {
        if(err) {
            console.log("ERRORERRORERROR");
            console.log(err);
            res.redirect('/dog/edit/' + req.params.id);
        } else {
            res.redirect("/");
        }
    });
});
//Post routes
app.post("/dog", function (req, res) {
    var newDog = new Dog({ 
        name: req.body.name,
        type: req.body.type,
        favorite_food: req.body.favorite_food
    });
    newDog.save(function(err) {
        if(err){
            console.log("somethin ain't right");
        } else {
            console.log("all good");
            res.redirect("/");
        }
    });
});

app.post("/dog/:id", function (req, res) {
    var updateDog = {};

    if (req.body.name) updateDog = req.body.name;
    if (req.body.type) updateDog = req.body.type;
    if (req.body.fav_food) updateDog = req.body.fav_food;

    Dog.update({ _id: req.params.id}, 
    { $set: updateDog },
    function (err) {
        if(err) {
            console.log("ERRORERRORERROR");
            console.log(err);
            res.redirect('/dog/edit/' + req.params.id);
        } else {
            res.redirect("/");
        }
    });
});


// Setting our Server to Listen on Port: 8000
app.listen(8000, function () {
    console.log("listening on port 8000");
});