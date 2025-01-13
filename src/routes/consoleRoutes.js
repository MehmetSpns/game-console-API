const express = require('express');
const consoleController = require('../controllers/consoleController');
const router = express.Router();

router.get('/', consoleController.getConsoles);
router.post('/', consoleController.createConsole);
router.put('/:id', consoleController.updateConsole); 
router.delete('/:id', consoleController.deleteConsole); 

module.exports = router;
