var mongoose = require('mongoose');

var personSchema = new mongoose.Schema({name: String});

var Person = mongoose.model("Person", personSchema);