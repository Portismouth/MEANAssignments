var mongoose = require('mongoose');
//require necessary controllers
var listings = require('../controllers/listings.js');

module.exports = function (app) {
    app.route('/api/listing')
        .get(listings.getAllListings)
        .post(listings.createListing)
        .put()
        .delete()
}