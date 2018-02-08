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
});

var server = app.listen(8000, function () {
    console.log("listening on port 8000");
});
var io = require('socket.io').listen(server);
io.sockets.on('connection', function (socket) {
    console.log("Client/socket is connected!");
    console.log("Client/socket id is: ", socket.id);
    // all the server socket code goes in here
    socket.on("button_clicked", function (data) {
        
        socket.emit('server_response', 
            { name: data.data.name,
                location: data.data.location,
                language: data.data.language,
                comment: data.data.comment,
                randomNum: Math.floor(Math.random() * 1000) + 1
            });
    });
});