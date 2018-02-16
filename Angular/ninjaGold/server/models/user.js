var mongoose = require("mongoose");
var Schema = mongoose.Schema;

//Schemas
var userSchema = new mongoose.Schema({
    user_name: String,
    games: [{ type: Schema.Types.ObjectId, ref: 'Game'}]
}, {timestamps: true});

//Models
mongoose.model("User", userSchema);
var User = mongoose.model("User");