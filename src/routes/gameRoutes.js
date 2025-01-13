const express = require('express');
const gameController = require('../controllers/gameController');
const router = express.Router();

router.get('/', gameController.getGames);
router.post('/', gameController.createGame);
router.get('/search', gameController.searchGames);
router.put('/:id', gameController.updateGame); 
router.delete('/:id', gameController.deleteGame); 

module.exports = router;
