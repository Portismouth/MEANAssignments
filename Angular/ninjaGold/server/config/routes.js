var mongoose = require("mongoose");
var Game = mongoose.model("Game");
var games = require("../controllers/games.js");

module.exports = function (app) {
    app.get("/game", function (req, res) {
        games.loadGame(req, res);
    });

    app.get("/leader-board", function (req, res) {
        games.leaderBoard(req, res);
    })

    app.post("/game", function (req, res) {
        games.saveGame(req, res);
    });
}