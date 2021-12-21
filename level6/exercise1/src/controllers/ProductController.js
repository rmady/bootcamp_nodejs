/**
 * BairesDev NodeJS Bootcamp level 6.
 * Using sequelize create a model named Product, it should contain at least two properties.
 * 
 * @author  Rodrigo Mady
 * @project NodeJS Bootcamp
 */ 
const Product   = require("../entities/product.model");
const sequelize = require("../database/conn");
const { Op }    = require("sequelize");

/**
 * Class Product Controller.
 */
class ProductController {
    /**
     * List products with a simple like filter.
     * 
     * @param {*} req 
     * @param {*} res 
     */
    async list(req, res) {
        const { name } = req.body;
        try {
            let products;
            if (name) {
                products = await Product.findAll({ 
                    where: {
                        name: {[Op.like]: `%${name}%`}
                    } 
                });
                if (products.length > 0) {
                    res.send( {success: true, products: products} );
                } else {
                    res.send( {success: false, products: `Database don't have any product with name like '${name}'`} );
                }
            } else {
                products = await Product.findAll() 
            }
            res.send( {success: true, products: products} );
        } catch (e) {
            console.log(e);
            res.status(500).send(e.message);
        }
    }

    /**
     * Get product by id.
     * 
     * @param {*} req 
     * @param {*} res 
     */
    async get(req, res) {
        const { id } = req.params;
        try {
            const product = await Product.findOne({ where: { id } });
            if (product) {
                res.send(product);
            } else {
                res.send(`Product with id ${id} not exist in database`);
            }
        } catch (e) {
            console.log(e);
            res.status(500).send(e.message);
        }
    }

    /**
     * Create product in database.
     * 
     * @param {*} req 
     * @param {*} res 
     */
    async create(req, res) {
        const { name, description, price, color } = req.body;
        try {
            const product = await Product.create({ name, description, price, color });
            res.send(product);
        } catch (e) {
            console.log(e);
            res.status(500).send(e.message);
        }
    }

    /**
     * Update product by id in database.
     * 
     * @param {*} req 
     * @param {*} res 
     */
    async update(req, res) {
        const { id } = req.params;
        const { name, description, price, color } = req.body;
        try {
            const product = await Product.findOne( {where: { id } });
            if (product) {
                product.name = name;
                product.description = description;
                product.price = price;
                product.color = color;
                await product.save();
                res.send(product);
            } else {
                res.send(`Product with id ${id} not exist in database`);
            }
        } catch (e) {
            console.log(e);
            res.status(500).send(e.message);
        }
    }

    /**
     * Delete product by id in database.
     * 
     * @param {*} req 
     * @param {*} res 
     */
    async delete(req, res) {
        const { id } = req.params;
        try {
            const product = await Product.findOne( {where: { id } });
            if (product) {
                await product.destroy();
                res.send( {success: true });
            } else {
                res.send( {success: false });
            }
        } catch (e) {
            console.log(e);
            res.status(500).send(e.message);
        }
    }
}

module.exports = new ProductController();