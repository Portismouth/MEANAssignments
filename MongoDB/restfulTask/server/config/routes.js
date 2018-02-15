var mongoose = require("mongoose");
var Task = mongoose.model("Task");
var tasks = require("../controllers/tasks.js");

module.exports = function (app) {

    app.route('')

    //GET routes
    app.get('/tasks', (req, res) => {
        tasks.all(req, res);
    });

    //POST Routes
    app.post('/task/:title/:desc', (req, res) => {
        tasks.create(req, res);
    });

    //PUT Routes
    
    //DELETE Route
    app.delete('/task/:id', (req, res) => {
        tasks.destroy(req, res);
    })
}