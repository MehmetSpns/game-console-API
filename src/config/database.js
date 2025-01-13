const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('games_console_db', 'root', 'your_password', {
  host: 'localhost',
  dialect: 'mysql',

});

module.exports = sequelize;
