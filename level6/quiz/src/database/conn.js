const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('level6quiz', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;