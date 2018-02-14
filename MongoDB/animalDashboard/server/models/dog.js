var mongoose = require("mongoose");

//Schemas
var dogSchema = new mongoose.Schema({
    name: String,
    type: String,
    favorite_food: String
}, { timestamps: true });

//Models
mongoose.model("Dog", dogSchema);