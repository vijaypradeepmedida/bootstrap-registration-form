const express = require('express');
const router = express.Router();
const Game = require('../modals/games');


router.get('/games', async (req, res) => {
    try {
        const games = await Game.find();
        res.status(200).json(games);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


router.post('/games', async (req, res) => {
    const game = new Game({
        gamename: req.body.gamename,
        type: req.body.type,
        status: req.body.status
    });
    try {
        const savedGame = await game.save();
        res.status(201).json(savedGame);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.delete('/games/:name', async (req, res) => {
    try {
        const game = await Game.deleteMany({gamename: req.params.name});
        if (!game){
            return res.status(404).send('Game not found');
        }

       
        
        res.status(200).json({ message: 'Game deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }           
});



module.exports = router;