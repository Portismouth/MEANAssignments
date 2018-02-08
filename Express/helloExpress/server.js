var session = require('express-session');
var express = require("express");
var app = express();
var bodyParser = require('body-parser');

app.use(session({ secret: 'codingdojorocks' }));
app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static(__dirname + "/static"));
// This sets the location where express will look for the ejs views
app.set('views', __dirname + '/views');
// Now lets set the view engine itself so that express knows that we are using ejs as opposed to another templating engine like jade
app.set('view engine', 'ejs');

app.get('/', function (request, response) {
    response.send("<h1>Hello Express</h1>");
})

app.get("/users", function (request, response) {
    // hard-coded user data
    var users_array = [
        { name: "Michael", email: "michael@codingdojo.com" },
        { name: "Jay", email: "jay@codingdojo.com" },
        { name: "Brendan", email: "brendan@codingdojo.com" },
        { name: "Andrew", email: "andrew@codingdojo.com" }
    ];
    response.render('users', { users: users_array });
})

app.get("/users/:id", function (req, res) {
    console.log("The user id requested is:", req.params.id);
    // just to illustrate that req.params is usable here:
    res.send("You requested the user with id: " + req.params.id);
    // code to get user from db goes here, etc...
});

app.post('/users', function (req, res) {
    console.log("POST DATA \n\n", req.body)
    //code to add user to db goes here!
    // redirect the user back to the root route.  
    res.redirect('/')
});


app.listen(8000, function () {
    console.log("listening on port 8000");
})