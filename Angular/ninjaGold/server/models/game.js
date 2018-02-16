var mongoose = require("mongoose");

//Schemas
var gameSchema = new mongoose.Schema({
    user: String,
    gold: Number,
    log: [{type: String}]
}, {timestamps: true});

//Models
mongoose.model("Game", gameSchema);
var Game = mongoose.model("Game");