var mongoose = require("mongoose");
var Task = mongoose.model("Task");
var tasks = require("../controllers/tasks.js");

module.exports = function (app) {
    //All tasks
    app.route('/api/task')
        .get(tasks.all)
        .post(tasks.create)

    //Individual tasks
    app.route('/api/task/:id')
        .get(tasks.getTask)
        .put(tasks.edit)
        .delete(tasks.destroy);
}