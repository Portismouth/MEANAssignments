var mongoose = require('mongoose');
var Person = mongoose.model('Person');

module.exports = {
    all: function(req, res) {
        Person.find({})
        .sort("name asc")
        .exec(function(err, people) {
            if(err){
                res.send("Error retreiving people...");
            } else {
                res.send(people);
            }
        });
    },
    add: function(req, res) {
        var newPerson = new Person({
            name: req.params.name
        });
        newPerson.save(function(err) {
            if(err) {
                console.log("error");
            } else {
                res.redirect("/");
            }
        });
    },
    show: function(req, res) {
        Person.findOne({name: req.params.name}, function (err, person) {
            if(err){
                console.log("error finding person")
            } else {
                res.send(person);
            }
        })
    },
    remove: function(req, res) {
        Person.remove({name: req.params.name}, function(err) {
            if(err) {
                console.log("error removing person");
            } else {
                res.redirect("/");
            }
        });
    }
}