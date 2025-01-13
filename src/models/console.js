const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const consoleModel = sequelize.define('console', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  manufacturer: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  release_year: {
    type: DataTypes.INTEGER,
  },
}, {
  tableName: 'consoles', 
});

module.exports = consoleModel;
