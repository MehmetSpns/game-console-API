const Console = require('../models/console');

exports.getAllConsoles = async (req, res) => {
  try {
    const consoles = await Console.findAll();
    res.json(consoles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createConsole = async (req, res) => {
  try {
    const { name, maker, release_year } = req.body;
    const console = await Console.create({ name, maker, release_year });
    res.status(201).json(console);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
