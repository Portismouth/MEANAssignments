var mongoose = require('mongoose');
var Task = mongoose.model("Task");

module.exports = {
    all: function(req, res) {
        Task.find({})
        .sort("createdAt desc")
        .exec(function(err, tasks) {
            if(err){
                res.send("Error retreiving tasks...");
            } else {
                res.send(tasks);
            }
        });
    },
    create: (req, res) => {
        var newTask = new Task({
            title: req.params.task,
        });
        newTask.save((err) => {
            if(err){
                console.log("error creating new task");
            } else {
                res.redirect("/tasks");
            }
        })
    }
}