const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Game = sequelize.define('Game', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  type: {
    type: DataTypes.STRING,
  },
  developer: {
    type: DataTypes.STRING,
  },
  release_year: {
    type: DataTypes.INTEGER,
  },
});

module.exports = Game;
