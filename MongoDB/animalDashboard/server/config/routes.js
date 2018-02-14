var mongoose = require("mongoose");
var Dog = mongoose.model("Dog");
var dogs = require("../controllers/dogs.js");

module.exports = function(app) {
    //Get routes
    app.get('/', function (req, res) {
        dogs.showAll(req, res);
    });

    app.get("/dog/new", function (req, res) {
        res.render("new");
    });

    app.get("/dog/:id", function (req, res) {
        dogs.showOne(req, res);
    });

    app.get("/dog/edit/:id", function (req, res) {
        dogs.showEdit(req, res);
    });

    app.get("/dog/delete/:id", function (req, res) {
        dogs.delete(req, res);
    });

    //Post routes
    app.post("/dog", function (req, res) {
        dogs.create(req, res);
    });

    app.post("/dog/:id", function (req, res) {
        dogs.edit(req, res);
    });
}