const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Console = require('./console'); 

const gameModel = sequelize.define('game', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  genre: {
    type: DataTypes.STRING,
  },
  release_year: {
    type: DataTypes.INTEGER,
  },
  console_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Console,
      key: 'id',
    },
  },
}, {
  tableName: 'games',  
});

module.exports = gameModel;
