const express = require('express');
const consoleController = require('../controllers/consoleController');
const router = express.Router();

router.get('/', consoleController.getConsoles);
router.post('/', consoleController.createConsole);
router.put('/:id', consoleController.updateConsole); 
router.delete('/:id', consoleController.deleteConsole); 
router.get('/:id', consoleController.getConsoleById); 


module.exports = router;
