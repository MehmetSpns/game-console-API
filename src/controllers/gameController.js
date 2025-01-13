const Game = require('../models/game');
const { Op } = require('sequelize');

exports.getGames = async (req, res) => {
    const { limit = 10, offset = 0, sort = 'desc' } = req.query;

    const validSortDirections = ['asc', 'desc'];
    if (!validSortDirections.includes(sort)) {
        return res.status(400).json({ error: "Please use 'asc' for ascending or 'desc' for descending order." });
    }

    try {
        const games = await Game.findAll({
            limit: parseInt(limit),
            offset: parseInt(offset),
            order: [['release_year', sort]], 
        });
        res.status(200).json(games);
    } catch (error) {
        res.status(500).json({ error: "ERROR fetching games" });
    }
};

exports.postGame = async (req, res) => {
    const { title, genre, release_year, console_id } = req.body;
  
    // Validation
    if (!title || !genre || !release_year || !console_id) {
      return res.status(400).json({ error: 'Please make sure all fields are filled => title, genre, release year, and console ID.' });
    }
  
    if (typeof release_year !== 'number' || release_year < 1950 || release_year > new Date().getFullYear()) {
      return res.status(400).json({ error: 'The release year must be a valid year between 1950 and the current year.' });
    }
  
    if (typeof console_id !== 'number') {
      return res.status(400).json({ error: 'The console ID must be a valid number.' });
    }
  
    if (title.length < 1 || title.length > 100) {
      return res.status(400).json({ error: 'The title must be between 1 and 100 characters long.' });
    }
  
    if (!/^[a-zA-Z\s]+$/.test(genre)) {
      return res.status(400).json({ error: 'The genre can only contain letters and spaces (no numbers or special characters).' });
    }
  
    try {
      const newGame = await Game.create({
        title,
        genre,
        release_year,
        console_id
      });

      res.status(201).json({ message: 'Game created successfully!', gameId: newGame.id });
    } catch (err) {
      res.status(500).json({ error: 'Ish! Something went wrong!' });
    }
};

  


exports.putGame = async (req, res) => {
    const { name, manufacturer, release_year } = req.body;

    try {
        const game = await Game.findByPk(req.params.id);
        if (!game) {
            return res.status(404).json({ error: "Game not found" });
        }

        if (release_year && (isNaN(release_year) || release_year < 1900 || release_year > new Date().getFullYear())) {
            return res.status(400).json({ error: "Invalid release year" });
        }

        await game.update({ name, manufacturer, release_year });
        res.status(200).json(game);
    } catch (error) {
        res.status(500).json({ error: "Game not updated -> FAIL" });
    }
};

exports.deleteGame = async (req, res) => {
    try {
        const game = await Game.findByPk(req.params.id);
        if (!game) {
            return res.status(404).json({ error: "Game not found" });
        }
        await game.destroy();
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: "Failed to delete game" });
    }
};

exports.searchGames = async (req, res) => {
    const { title, genre, sort = 'desc' } = req.query;

    const validSortDirections = ['asc', 'desc'];
    if (!validSortDirections.includes(sort)) {
        return res.status(400).json({ error: "Invalid sort direction. Use 'asc' or 'desc'." });
    }

    if (!title && !genre) {
        return res.status(400).json({ error: "Search by title or by genre please" });
    }

    const searchCriteria = {};
    if (title) searchCriteria.title = { [Op.like]: `%${title}%` };
    if (genre) searchCriteria.genre = { [Op.like]: `%${genre}%` };

    try {
        const games = await Game.findAll({
            where: searchCriteria,
            order: [['release_year', sort]], 
        });
        res.status(200).json(games);
    } catch (error) {
        res.status(500).json({ error: "Failed to search games" });
    }
};


exports.getGameById = async (req, res) => {
    try {
        const game = await Game.findByPk(req.params.id);
        if (!game) {
            return res.status(404).json({ error: "Game not found" });
        }
        res.status(200).json(game);
    } catch (error) {
        res.status(500).json({ error: "Failed to get game details" });
    }
};

