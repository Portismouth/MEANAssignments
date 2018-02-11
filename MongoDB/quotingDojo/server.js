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
mongoose.connect('mongodb://localhost/basic_mongoose');
// Use native promises
mongoose.Promise = global.Promise;

//Schemas
var quoteSchema = new mongoose.Schema({
    quote: String,
    user: String,
    date: { 
        type: Date, 
        default: Date.now 
    }
})
mongoose.model("Quote", quoteSchema);
var Quote = mongoose.model("Quote");
//Routes
app.get('/', function (req, res) {
    res.render("index");
})
app.get("/quotes", function (req, res){
    Quote.find({}, function (err, quotes) {
        if (err) {
            console.log("somethin ain't right")
            res.redirect("/")
        } else {
            console.log(quotes)
            res.render( "quotes", { Quotes: quotes } ) 
        }
    })
})
app.post("/quote", function (req, res) {
    console.log("POST DATA", req.body);
    var newQuote = new Quote({ 
        user: req.body.user,
        quote: req.body.quote 
    })
    newQuote.save(function(err) {
        if(err){
            console.log("somethin ain't right")
        } else {
            console.log("all good")
            res.redirect("/quotes")
        }
    })
});
// Setting our Server to Listen on Port: 8000
app.listen(8000, function () {
    console.log("listening on port 8000");
})