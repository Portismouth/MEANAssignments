var mongoose = require("mongoose");
var Game = mongoose.model("Game");


module.exports = {
    loadGame: function (req, res) {
        //load saved game
    },
    saveGame: function (req, res) {
        console.log("talking to angular")
        console.log(req.body)
    },
    leaderBoard: function (req, res) {
        //pull top five games to display leaderboard
    }
}