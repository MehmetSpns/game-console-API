const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Console = sequelize.define('Console', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  maker: {
    type: DataTypes.STRING,
  },
  release_year: {
    type: DataTypes.INTEGER,
  },
});

module.exports = Console;
