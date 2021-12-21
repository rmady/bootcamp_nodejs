/**
 * BairesDev NodeJS Bootcamp level 6 Exercise 1.
 * Using sequelize create a model named Product, it should contain at least two properties.
 * 
 * @author  Rodrigo Mady
 * @project NodeJS Bootcamp
 */

const {Sequelize} = require("sequelize");

const sequelize = new Sequelize('level6exe1', 'root', 'root', {
    host:    'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;