var mongoose = require("mongoose");
var Schema = mongoose.Schema;

//Schemas
var gameSchema = new mongoose.Schema({
    // _user: { type: Schema.Types.ObjectId, ref: 'User' },
    name: String,
    gold: Number,
    log: [{ type: String }]
}, { timestamps: true });

//Models
mongoose.model("Game", gameSchema);
var Game = mongoose.model("Game");