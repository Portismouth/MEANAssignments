
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
    if(req.session.views) {
        req.session.views += 1;
        console.log(req.session.views + " line 23")
    } else {
        req.session.views = 1;
        console.log(req.session.views + " line 26")
    }
    res.render("index");
});

app.listen(8000, function () {
    console.log("listening on port 8000");
});