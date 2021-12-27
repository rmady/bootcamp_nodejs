/**
 * BairesDev NodeJS Bootcamp level 6.
 * Level 8 - Final Project.
 * 
 * @author  Rodrigo Mady
 * @project NodeJS Bootcamp
 */

const Product   = require("../entities/product.model");
const { Op }    = require("sequelize")

class ProductController {
    async list(req, res) {
        const { name } = req.body;
        let products = [];
        try {
            if (name) {
                products = await Product.findAll({
                    where: {
                        name: {[Op.like]: `%${name}%`}
                    }
                });
                if (products.length === 0) {
                    res.send(`Sorry, we don't have any products with name like '${name}'`);
                }
            } else {
                products = await Product.findAll();
            }
            res.send(products);
        } catch (e) {
            console.log(e);
            res.status(500).send(e.message);
        }
    }

    async get(req, res) {
        const { id } = req.params;
        try {
            const product = await Product.findOne({ where: { id } });
            if (product) {
                res.send(product);
            } else {
                res.send(`Sorry, we don't have any product with id '${id}'`);
            }
        } catch (e) {
            console.log(e);
            res.status(500).send(e.message);
        }
    }

    async create(req, res) {
        const { name, price, color } = req.body;
        try {
            const product = await Product.create( {
                name, price, color
            });
            res.send(product);
        } catch (e) {
            console.log(e);
            res.status(500).send(e.message);
        }
    }

    async update(req, res) {
        const { id } = req.params;
        const { name, price, color } = req.body;
        try {
            const product = await Product.findOne({ 
                where: {id}
            });
            if (product) {
                product.name = name;
                product.price = price;
                product.color = color;
                await product.save();
                res.send(product);
            } else {
                res.send(`Sorry, we don't have any product with id '${id}'`);
            }
        } catch (e) {
            console.log(e);
            res.status(500).send(e.message);
        }
    }

    async delete(req, res) {
        const { id } = req.params;
        try {
            const product = await Product.findOne({ 
                where: { id } 
            });
            if (product) {
                await product.destroy();
                res.send( {success: true});
            } else {
                res.send(`Sorry, we don't have any product with id '${id}'`);
            }
        } catch (e) {
            console.log(e);
            res.status(500).send(e.message);
        }
    }
}

module.exports = new ProductController();