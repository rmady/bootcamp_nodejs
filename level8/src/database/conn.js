/**
 * BairesDev NodeJS Bootcamp level 8.
 * Final Project
 * 
 * @author  Rodrigo Mady
 * @project NodeJS Bootcamp
 */ 

const {Sequelize} = require("sequelize");

const sequelize = new Sequelize('level8exe1', 'root', 'root', {
    host:    'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;