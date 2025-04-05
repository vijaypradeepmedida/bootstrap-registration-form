const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
    gamename: { type: String },
    type: { type: String },
    status: { type: String },
}
);
const Game = mongoose.model('Game', gameSchema);
module.exports = Game;