/**
 * BairesDev NodeJS Bootcamp level 6.
 * Create a node server with DB connection.
 * 
 * @author  Rodrigo Mady
 * @project NodeJS Bootcamp
 */ 

const { Sequelize } = require("sequelize");
 
const sequelize = new Sequelize("lecture", "root", "root", {
    host: "localhost",
    dialect: "mysql",
});
 
module.exports = sequelize;