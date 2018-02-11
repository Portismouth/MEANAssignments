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
mongoose.connect('mongodb://localhost/messages');
// Use native promises
mongoose.Promise = global.Promise;

//Schemas
var Schema = mongoose.Schema;

var messageSchema = new mongoose.Schema({
    name: { type: String, required: [true, "Why no name?"], minlength: [4, "Name must be at least 4 characters."] },
    text: { type: String, required: [true, "Why no message?"], minlength: 5 },
    comments: [{type: Schema.Types.ObjectId, ref: "Comment"}]
}, {timestamps: true} );

var commentSchema = new mongoose.Schema({
    _message: {type: Schema.Types.ObjectId, ref: "Message"},
    name: { type: String, required: [true, "Why no name?"], minlength: [4, "Name must be at least 4 characters."] },
    text: { type: String, required: [true, "Why no message?"] },
}, {timestamps: true});

//Models
mongoose.model("Message", messageSchema);
mongoose.model("Comment", commentSchema);
var Message = mongoose.model("Message");
var Comment = mongoose.model("Comment");

//All Messages
//Get routes
app.get('/', function (req, res) {
    Message.find({})
        .sort({ createdAt: -1 })
        .populate("comments")
        .exec( function (err, messages) {
            console.log(messages)
        if (err) {
            console.log("somethin ain't right")
            res.redirect("/")
        } else {
            res.render("index", { allMessages: messages })
        }
    });
});

//Post routes
app.post("/message", function (req, res) {
    console.log(req.body)
    var newMessage = new Message({ 
        name: req.body.name,
        text: req.body.text,
    });
    newMessage.save(function(err) {
        if(err){
            console.log("somethin ain't right");
            Message.find({})
                .populate("comments")
                .exec(function (err, messages) {
                if (err) {
                    console.log("somethin ain't right")
                    res.redirect("/")
                } else {
                    res.render("index", { allMessages: messages, errors: newMessage.errors })
                }
            });
        } else {
            console.log("all good");
            res.redirect("/");
        }
    });
});

app.post("/comment", function (req, res) {
    console.log("Comment POST");
    console.log(req.body);
    Message.findById(req.body.messageId, function (err, message) {
        console.log(message);
        if(err) {
            console.log("couldn't find message");
        } else {
            let newComment = new Comment({
                name: req.body.name,
                text: req.body.text
            });
            newComment._message = message.id;
            newComment.save(function(err) {
                if(err){
                    console.log("somethin ain't right");
                    Message.find({})
                        .populate("comments")
                        .exec(function (err, messages) {
                            if (err) {
                                console.log("somethin ain't right")
                                res.redirect("/")
                            } else {
                                res.render("index", { allMessages: messages, errors: newComment.errors })
                            }
                        });
                } else {
                    message.comments.push(newComment);
                    message.save(function(err) {
                        if(err){
                            console.log("can't save message!")
                        } else {
                            console.log("We saved the message with new comments")
                        }
                    })
                }
            });
        }
        res.redirect("/")
    });
});


// Setting our Server to Listen on Port: 8000
app.listen(8000, function () {
    console.log("listening on port 8000");
});