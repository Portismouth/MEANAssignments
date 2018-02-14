var mongoose = require('mongoose');

var quoteSchema = new mongoose.Schema({
    quote: String,
    user: String,
    date: {
        type: Date,
        default: Date.now
    }
})

var Quote = mongoose.model("Quote", quoteSchema);