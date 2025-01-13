const Console = require('../models/console');
const { Op } = require('sequelize');

exports.getConsoles = async (req, res) => {
    const { limit = 10, offset = 0 } = req.query;
    try {
        const consoles = await Console.findAll({
            limit: parseInt(limit),
            offset: parseInt(offset),
        });
        res.status(200).json(consoles);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch consoles" });
    }
};

exports.createConsole = async (req, res) => {
    const { name, manufacturer, release_year } = req.body;
    
    if (!name || !manufacturer || !release_year) {
        return res.status(400).json({ error: "Fill all fields" });
    }
    
    if (isNaN(release_year) || release_year < 1900 || release_year > new Date().getFullYear()) {
        return res.status(400).json({ error: "Invalid release year" });
    }

    try {
        const newConsole = await Console.create({ name, manufacturer, release_year });
        res.status(201).json(newConsole);
    } catch (error) {
        console.error('Error creating console:', error);
        if (error.name === 'SequelizeValidationError') {
            return res.status(400).json({ error: "Validation error", details: error.errors });
        }
        res.status(500).json({ error: "Console not made sorry" });
    }
};

exports.updateConsole = async (req, res) => {
    const { name, manufacturer, release_year } = req.body;
    
    try {
        const console = await Console.findByPk(req.params.id);
        if (!console) {
            return res.status(404).json({ error: "Console not found..." });
        }

        if (release_year && (isNaN(release_year) || release_year < 1900 || release_year > new Date().getFullYear())) {
            return res.status(400).json({ error: "Invalid release year." });
        }

        await console.update({ name, manufacturer, release_year });
        res.status(200).json(console);
    } catch (error) {
        res.status(500).json({ error: "Failed to update console" });
    }
};

exports.deleteConsole = async (req, res) => {
    try {
        const console = await Console.findByPk(req.params.id);
        if (!console) {
            return res.status(404).json({ error: "Console not found" });
        }
        await console.destroy();
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: "Failed to delete this console" });
    }
};

exports.getConsoleById = async (req, res) => {
    try {
        const console = await Console.findByPk(req.params.id);
        if (!console) {
            return res.status(404).json({ error: "Console not found" });
        }
        res.status(200).json(console);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch console details" });
    }
};

