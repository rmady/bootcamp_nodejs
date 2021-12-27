const {Model, DataTypes} = require('sequelize');
const sequelize = require('../database/conn');

class Product extends Model {}

Product.init( 
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.DECIMAL
        },
        color: {
            type: DataTypes.STRING
        },
    },
    {
        sequelize,
        modelName: "Product",
    }
);

module.exports = Product;