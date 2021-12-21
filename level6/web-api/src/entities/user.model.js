/**
 * BairesDev NodeJS Bootcamp level 6.
 * Create a node server with DB connection.
 * 
 * @author  Rodrigo Mady
 * @project NodeJS Bootcamp
 */ 

// user.model.js
const { DataTypes, Model } = require("sequelize");
const sequelize = require("../database/conn");
 
class User extends Model {}
 
User.init(
 {
   // Model attributes are defined here
   firstName: {
     type: DataTypes.STRING,
     allowNull: false,
   },
   lastName: {
     type: DataTypes.STRING,
     // allowNull defaults to true
   },
 },
 {
   // Other model options go here
   sequelize, // We need to pass the connection instance
   modelName: "User", // We need to choose the model name
 }
);
 
module.exports = User;
