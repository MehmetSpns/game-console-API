const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Console = require('./console'); 

const gameModel = sequelize.define('Game', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  genre: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  release_year: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  console_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
}, {
  tableName: 'games', // Use this to match the table name in your database
  timestamps: false,  // Disable createdAt and updatedAt fields
});

module.exports = gameModel;