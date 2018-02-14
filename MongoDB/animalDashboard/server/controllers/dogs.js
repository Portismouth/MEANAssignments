var mongoose = require("mongoose");
var Dog = mongoose.model("Dog");

module.exports = {
    showAll: function (req, res) {
        Dog.find({}, function (err, dogs) {
            if (err) {
                console.log("somethin ain't right")
                res.redirect("/")
            } else {
                console.log(dogs)
                res.render("index", { Dogs: dogs })
            }
        });
    },
    //show one dog based on id
    showOne: function (req, res) {
        Dog.findOne({ _id: req.params.id }, function (err, dog) {
            if (err) {
                console.log("somethin ain't right")
                res.redirect("/")
            } else {
                console.log(dog)
                res.render("show", { Dog: dog })
            }
        });
    },
    showEdit: function (req, res) {
        Dog.findOne({ _id: req.params.id }, function (err, dog) {
            if (err) {
                console.log("somethin ain't right")
                res.redirect("/")
            } else {
                console.log(dog)
                res.render("edit", { Dog: dog })
            }
        });
    },
    create: function (req, res) {
        var newDog = new Dog({
            name: req.body.name,
            type: req.body.type,
            favorite_food: req.body.favorite_food
        });
        newDog.save(function (err) {
            if (err) {
                console.log("somethin ain't right");
            } else {
                console.log("all good");
                res.redirect("/");
            }
        });
    },
    edit: function (req, res) {
        var updateDog = {};

        if (req.body.name) updateDog = req.body.name;
        if (req.body.type) updateDog = req.body.type;
        if (req.body.fav_food) updateDog = req.body.fav_food;

        Dog.update({ _id: req.params.id },
            { $set: updateDog },
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
    delete: function (req, res) {
        Dog.remove({ _id: req.params.id }, function (err) {
            if (err) {
                console.log("ERRORERRORERROR");
                console.log(err);
                res.redirect('/dog/edit/' + req.params.id);
            } else {
                res.redirect("/");
            }
        });
    }
}