var session = require('express-session');
var express = require("express");
var path = require("path");

var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    secret: 'codingdojorocks',
    resave: false,
    saveUninitialized: true,
}));

app.use(express.static(path.join(__dirname, "./static")));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render("index");
})

app.post('/', function (req, res) {
    // console.log(req.session.result.name)
    result = {
        name: req.session.result.name,
        location: req.session.result.location,
        language: req.session.result.language,
        comment: req.session.result.comment,
    }
    console.log(result)
    res.render("result", result)
});

app.listen(8000, function () {
    console.log("listening on port 8000");
});