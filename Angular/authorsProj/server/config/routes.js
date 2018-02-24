var mongoose = require('mongoose');
var authors = require('../controllers/authors.js');

module.exports = function (app) {
    //Author routes
    app.route('/api/authors')
        .get(authors.findAllAuthors)
        .post(authors.createAuthor)

    app.route('/api/author/:id')
        .get(authors.findAuthById)
        .put(authors.updateAuth)
        .delete(authors.deleteAuth)

    //Quote routes
    app.route('/api/quotes/:userId')
        .post(authors.createQuote)
        .put()
        .put(authors.deleteQuote)
}