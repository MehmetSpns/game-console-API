const Game = require('../models/game');

exports.getAllGames = async (req, res) => {
  try {
    const games = await Game.findAll();
    res.json(games);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createGame = async (req, res) => {
  try {
    const { title, type, developer, release_year } = req.body;
    const game = await Game.create({ title, type, developer, release_year });
    res.status(201).json(game);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
