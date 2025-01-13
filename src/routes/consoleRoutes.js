const express = require('express');
const consoleController = require('../controllers/consoleController');
const router = express.Router();

router.get('/', consoleController.getAllConsoles);
router.post('/', consoleController.createConsole);

module.exports = router;
