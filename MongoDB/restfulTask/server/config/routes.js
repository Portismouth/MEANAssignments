var mongoose = require("mongoose");
var Task = mongoose.model("Task");
var tasks = require("../controllers/tasks.js");

module.exports = function (app) {
    //GET routes
    app.get('/tasks', (req, res) => {
        tasks.all(req, res);
    });

    //POST Routes
    app.get('/tasks/:task', (req, res) => {
        tasks.create(req, res);
    });

    //PUT Routes
    
    //DELETE Route
}