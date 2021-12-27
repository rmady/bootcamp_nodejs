const Product = require('../entities/product.model');

class ProductController {

/**
    * List products
    * Create product
    * Get a product's data
    * Update product
    * Delete product 
     */
    async list(req, res) {
        try {
            let products = await Product.findAll();
            res.send(products);
        } catch (e) {
            console.log(e);
            res.status(500).send(e.message);
        }
    }

    async create(req, res) {
        const { name, price, color } = req.body;
        try {
            const product = await Product.create({ name, price, color });
            res.send(product);
        } catch (e) {
            console.log(e);
            res.status(500).send(e.message);
        }
    }

    async get(req, res) {
        const { id } = req.params;
        try {
            const product = await Product.findOne( {where: {id} });
            if (product) {
                res.send(product);
            } else {
                res.send(`Sorry, product with id ${id} was not found`);
            }
        } catch (e) {
            console.log(e);
            res.status(500).send(e.message);
        }
    }

    async update(req, res) {
        const { id } = req.params;
        const { name, price, color } = req.body;
        try {
            const product = await Product.findOne( {where: {id} });
            if (product) {
                product.name = name;
                product.price = price;
                product.color = color;
                await product.save();
                res.send(product);
            } else {
                res.send(`Sorry, product with id ${id} was not found`);
            }
        } catch (e) {
            console.log(e);
            res.status(500).send(e.message);
        }
    }

    async delete(req, res) {
        const { id } = req.params;
        try {
            const product = await Product.findOne( {where: {id} });
            if (product) {
                await product.destroy();
                res.send({success: true, message: `Product with id ${id} was deleted`});
            } else {
                res.send(`Sorry, product with id ${id} was not found`);
            }
        } catch (e) {
            console.log(e);
            res.status(500).send(e.message);
        }
    }
}

module.exports = new ProductController();