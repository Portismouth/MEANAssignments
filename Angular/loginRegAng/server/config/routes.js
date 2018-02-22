var mongoose = require("mongoose");
var User = mongoose.model("User");
var users = require("../controllers/users.js");

module.exports = function (app) {
    //GET Routes
    // app.get("/", function (req, res) {
    //     res.render("index", { errors: [] });
    // });

    //POST Routes
    app.post("/register", function (req, res) {
        console.log("here")
        users.register(req, res);
    });
    app.post("/login", function (req, res) {
        users.login(req, res);
    })
}