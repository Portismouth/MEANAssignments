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
            title: req.params.title,
            desc: req.params.desc
        });
        newTask.save((err) => {
            if(err){
                console.log("error creating new task");
            } else {
                res.redirect("/tasks");
            }
        })
    },
    destroy: (req, res) => {
        Task.remove({ "_id": req.params.id }, function (err) {
            console.log(req.params.id);
            if (err) {
                console.log("ERRORERRORERROR");
                res.redirect('/tasks');
            } else {
                res.redirect("/tasks");
            }
        });
    },
    edit: function(req, res){
        var updateTask = {};

        if (req.params.title) updateTask = req.params.title;
        if (req.params.desc) updateTask = req.params.desc;
        if (req.params.completed) updateTask = req.params.completed;

        Task.update({ _id: req.params.id },
            { $set: updateTask },
            function (err) {
                if (err) {
                    console.log("ERRORERRORERROR");
                    console.log(err);
                    res.redirect('/dog/edit/' + req.params.id);
                } else {
                    res.redirect("/");
                }
            });
    },
}