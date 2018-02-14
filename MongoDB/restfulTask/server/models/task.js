var mongoose = require('mongoose');

var taskSchema = new mongoose.Schema({
    title: String,
    desc: String,
    completed: { type: Boolean, default: false }
}, { timestamps: true })

var Task = mongoose.model("Task", taskSchema);