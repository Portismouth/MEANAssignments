var mongoose = require('mongoose');
var Author = mongoose.model('Author');
var Quote = mongoose.model('Quote');

module.exports = {
    findAllAuthors: function (req, res) {
        Author.find({})
            .sort("lastName asc")
            .exec(function (err, authors) {
                if (err) {
                    res.send("Error");
                } else {
                    res.send(authors);
                }
            });
    },
    createAuthor: function (req, res) {
        newAuth = new Author({
            firstName: req.body.firstName,
            lastName: req.body.lastName
        });

        newAuth.save(function (err) {
            if (err) {
                res.send(newAuth.errors);
            } else {
                res.send({ message: "success" });
            }
        });
    },
    findAuthById: function (req, res) {
        Author.findById(req.params.id, function (err, author) {
            if (err) {
                res.send(err);
            } else {
                res.send(author);
            }
        })
    },
    updateAuth: function (req, res) {
        console.log("talking to angular")
        let authToUpdate = {};

        if (req.body.firstName) authToUpdate.firstName = req.body.firstName;

        if (req.body.lastName) authToUpdate.lastName = req.body.lastName;

        Author.findByIdAndUpdate(req.body.id,
            authToUpdate,
            function (err, auth) {
                if (err) {
                    console.log("ERRORERRORERROR");
                    console.log(err);
                    res.send(err);
                } else {
                    res.send(auth);
                }
            });
    },
    deleteAuth: function (req, res) {
        Author.findByIdAndRemove(req.params.id, function (err, author) {
            if (err) {
                res.send({ message: "problem deleting" })
            } else {
                res.send(author);
            }
        });
    },
    createQuote: function (req, res) {
        console.log("talking to angular");
        console.log(req.body.authId)

        Author.findById(req.body.authId, function (err, author) {
            console.log(author);
            if (err) {
                res.send(err);
            } else {
                let newQuote = new Quote({
                    text: req.body.text
                });
                console.log(author);
                newQuote.save(function (err) {
                    if (err) {
                        res.send(newQuote.errors);
                    } else {
                        author.quotes.push(newQuote);
                        author.save(function (saveErr) {
                            if (saveErr) {
                                res.send(saveErr);
                            } else {
                                res.send({ message: "success" });
                            }
                        })
                    }
                })
            }
        });
    },
    deleteQuote: function (req, res) {
        console.log("talking to angular");
        Quote.findByIdAndRemove(req.params.userId, function (err) {
            if (err) {
                res.send(err);
            } else {
                Quote.find({}, function(err, quotes) {
                    if (err) {
                        res.send(err);
                    } else {
                        res.send(quotes);
                    }
                });
            }
        })
    }
}