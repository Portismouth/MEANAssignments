var mongoose = require('mongoose');
var Listing = mongoose.model('Listing');

module.exports = {
    getAllListings: function (req, res) {
        Listing.find({}, function (err, listings) {
            if (err) {
                res.send(err);
            } else {
                res.send(listings);
            }
        })
    },
    createListing: function (req, res) {
        let newListing = new Listing({
            title: req.body.title,
            desc: req.body.desc,
            price: req.body.price,
            location: req.body.location,
            image: req.body.image
        });
        console.log(newListing);
        newListing.save(function (err, listing) {
            if (err) {
                res.send(newListing.errors)
            } else {
                res.send({ message: "success" })
            }
        })
    }
}