

var session = require('express-session');
var express = require("express");
var path = require("path");

var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
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

var messages = [];

io.sockets.on('connection', function (socket) {
    socket.emit("showMessages", messages);
    console.log("Client/socket is connected!");
    console.log("Client/socket id is: ", socket.id);
    let user;
    // all the server socket code goes in here
    socket.on("newUser", function (name) {
        user = name;
        io.emit("joined", name)
    });
    socket.on("newMessage", function (message) {
        messages.push(message);
        io.emit("showMessages", messages)
    });
    socket.on("disconnect", function () {
        io.emit("userDisconnect", user)
    });
})
