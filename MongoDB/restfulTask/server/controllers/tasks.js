var mongoose = require('mongoose');
var Task = mongoose.model("Task");

module.exports = {
    all: function (req, res) {
        Task.find({})
            .sort("createdAt desc")
            .exec(function (err, tasks) {
                if (err) {
                    res.send("Error retreiving tasks...");
                } else {
                    res.send(tasks);
                }
            });
    },
    getTask: (req, res) => {
        Task.findById(req.params.id, function (err, task) {
            if (err) {
                res.send("Error receiving task");
            } else {
                res.send(task);
            }
        })
    },
    create: (req, res) => {
        var newTask = new Task(req.body);
        newTask.save((err) => {
            if (err) {
                console.log("error creating new task");
            } else {
                res.send(newTask);
            }
        })
    },
    destroy: (req, res) => {
        console.log("talking to angular");
        Task.findByIdAndRemove(req.params.id, function (err, task) {
            if (err) {
                console.log("ERRORERRORERROR");
                res.send("error deleting task")
            } else {
                res.send(task);
            }
        });
    },
    edit: function (req, res) {
        let updateTask = {};

        console.log("talking to angular");

        if (req.body.title) updateTask.title = req.body.title;
        if (req.body.desc) updateTask.desc = req.body.desc;
        if (req.body.completed) updateTask.completed = req.body.completed;
        // updateTask.updatedAt = Date.now();

        Task.findByIdAndUpdate(req.body.id,
            updateTask,
            function (err, task) {
                if (err) {
                    console.log("ERRORERRORERROR");
                    console.log(err);
                    res.send(err);
                } else {
                    res.send(task);
                }
            });
    },
}