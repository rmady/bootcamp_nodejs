/**
 * BairesDev NodeJS Bootcamp level 6.
 * Using sequelize create a model named Product, it should contain at least two properties.
 * 
 * @author  Rodrigo Mady
 * @project NodeJS Bootcamp
 */ 

const { DataTypes, Model } = require("sequelize");
const sequelize = require("../database/conn");
 
class Product extends Model {}
 
Product.init({
    // Model attributes are defined here
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
    },
    price: {
        type: DataTypes.FLOAT
    },
    color: {
        type: DataTypes.STRING
    }
},
    {
    sequelize,
    modelName: "product",
    }
); 
module.exports = Product;
