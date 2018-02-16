var mongoose = require("mongoose");
var Game = mongoose.model("Game");


module.exports = {
    loadGame: function (req, res) {
        //load saved game
    },
    loadAllGames: function (req, res) {
        //load all games
    },
    saveGame: function (req, res) {
        console.log(req.body);
        let gameToSave = new Game(req.body);
        gameToSave.save(function(err){
            if(err){
                console.log("Something ain't right...")
            } else {
                console.log("saved to db");
                return gameToSave;
            }
        });
    },
    leaderBoard: function (req, res) {
        //pull top five games to display leaderboard
    }
}