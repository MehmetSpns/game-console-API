const express = require('express');
const gameController = require('../controllers/gameController');
const router = express.Router();

router.get('/', gameController.getGames);
router.post('/', gameController.postGame);
router.get('/search', gameController.searchGames);
router.put('/:id', gameController.putGame); 
router.delete('/:id', gameController.deleteGame); 
router.get('/:id', gameController.getGameById); 

module.exports = router;
