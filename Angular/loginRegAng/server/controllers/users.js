
var mongoose = require("mongoose");
var bcrypt = require("bcrypt-as-promised");
var User = mongoose.model("User");
var session = require('express-session');

module.exports = {
    register: (req, res) => {
        console.log("===============reached the reg controller=================")
        //passwordConf Validation
        if (req.body.passwordConf === null) {
            var regErrors = [{ message: "" }];
            regErrors[0]['message'] = "Please enter a confirmation password";
        }
        if (req.body.password !== req.body.passwordConf) {
            var regErrors = [{ message: "" }];
            regErrors[0]['message'] = "Passwords must match!";
        }

        var newUser = new User({
            email: req.body.email,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            birthday: req.body.birthday,
            password: req.body.password
        });

        newUser.save(function (err) {
            console.log("======================saving====================")
            if (err) {
                if (regErrors) {
                    ("======================line33====================")
                    res.json({ errors: newUser.errors, regErrors: regErrors })
                } else {
                    ("======================line36====================")
                    res.json({ errors: newUser.errors })
                }
            } else if (regErrors) {
                ("======================line40====================")
                res.json({ errors: regErrors })
            } else {
                ("======================line43====================")
                console.log("==================user registered====================")
                res.json({ message: "Great job" })
            }
        })
    },
    login: (req, res) => {
        console.log("===============reached the login controller=================")
        // if (req.body.email === undefined && req.body.password === undefined){
        //     logErrors.push({ message: "Please give some sort of effort... "});
        //     res.render("index", logErrors )
        // }
        // if (req.body.email === null) {
        //     logErrors.push({message: "Please enter a valid login!"}) ;
        // }
        // if (req.body.password == null) {
        //     logErrors.push({ message: "Please enter a password!"});
        // }
        User.findOne({ email: req.body.email }, function (err, user) {
            if (err) {
                res.render('index', { errorsLogin: error })
            } else if (user === null) {
                console.log("Email is not in our database");
                res.redirect('/')
            } else {
                bcrypt.compare(req.body.password, user.password)
                    .then(function (loggedIn) {
                        console.log("=========login success================")
                        console.log(loggedIn)
                        req.session.userId = user._id;
                        console.log(req.session.userId);
                        res.redirect("/")
                    })
                    .catch(function (loginError) {
                        console.log("=========login FAIL================")
                        res.redirect("/")
                    });
            }
        });
    }
}