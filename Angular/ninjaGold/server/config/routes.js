var mongoose = require("mongoose");
var Game = mongoose.model("Game");
var games = require("../controllers/games.js");
var users = require("../controllers/users.js");

module.exports = function (app) {

    app.route("/api/game")
        .get(games.loadGame)
        .post(games.saveGame);

    app.route("/api/user")
        .post(users.saveUser)
    
    app.route("/api/user/:userId")
        .get(users.loadUser)


    // app.get("/api/game", function (req, res) {
    //     games.loadGame(req, res);
    // });

    // app.get("/api/leader-board", function (req, res) {
    //     games.leaderBoard(req, res);
    // })

    // app.post("/api/game", function (req, res) {
    //     games.saveGame(req, res);
    // });

}