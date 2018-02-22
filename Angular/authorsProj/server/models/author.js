var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var quoteSchema = new mongoose.Schema({
    text: {
        type: String,
        required: [true, "Please enter a quote!"],
        minlength: [3, "Quote must be at least 3 characters!"]
    },
    meta: {
        votes: Number
    }
});

var authorSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First name is required!"],
        minlength: [3, "Name must be at least 3 characters!"]
    },
    lastName: {
        type: String,
        required: [true, "Last name is required!"],
        minlength: [3, "Name must be at least 3 characters!"]
    },
    quotes: [quoteSchema]
});

mongoose.model("Author", authorSchema);
mongoose.model("Quote", quoteSchema);