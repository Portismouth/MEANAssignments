var session = require('express-session');
var express = require("express");
var path = require("path");

var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static")));
app.use(session({
    secret: 'butts',
    resave: false,
    saveUninitialized: true,
}));

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
    var count = 0;
    // all the server socket code goes in here
    socket.on("counter_clicked", function (data) {
        count += 1;
        io.emit('server_response', { response: "the client is listening", count: count});
    });
    socket.on("reset_count", function (data) {
        count = 0;
        io.emit("server_response", {count: count});
    });
});