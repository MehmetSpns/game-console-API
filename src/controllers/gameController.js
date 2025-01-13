const Game = require('../models/game');
const { Op } = require('sequelize');

exports.getGames = async (req, res) => {
    const { limit = 10, offset = 0 } = req.query;
    try {
        const games = await Game.findAll({
            limit: parseInt(limit),
            offset: parseInt(offset),
        });
        res.status(200).json(games);
    } catch (error) {
        res.status(500).json({ error: "ERROR fetching games" });
    }
};

exports.createGame = async (req, res) => {
    const { name, manufacturer, release_year } = req.body;
    
    if (!name || !manufacturer || !release_year) {
        return res.status(400).json({ error: "Fill all fields" });
    }

    if (isNaN(release_year) || release_year < 1900 || release_year > new Date().getFullYear()) {
        return res.status(400).json({ error: "Invalid release year" });
    }

    try {
        const newGame = await Game.create({ name, manufacturer, release_year });
        res.status(201).json(newGame);
    } catch (error) {
        res.status(500).json({ error: "Failed to create the game..." });
    }
};

exports.updateGame = async (req, res) => {
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
    const { name } = req.query;
    if (!name) {
        return res.status(400).json({ error: "name is required" });
    }
    try {
        const games = await Game.findAll({
            where: {
                name: { [Op.like]: `%${name}%` },
            },
        });
        res.status(200).json(games);
    } catch (error) {
        res.status(500).json({ error: "Failed to search games" });
    }
};
