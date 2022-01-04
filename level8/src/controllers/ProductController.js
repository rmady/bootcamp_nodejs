/**
 * BairesDev NodeJS Bootcamp level 6.
 * Level 8 - Final Project.
 * 
 * @author  Rodrigo Mady
 * @project NodeJS Bootcamp
 */

const Product = require("../entities/product.model");
const { Op }  = require("sequelize")
const path    = require('path');
const fs      = require('fs');
const pdf     = require('pdf-creator-node');
const options = require('../helpers/options');

/**
 * Class Product Controller.
 */
class ProductController {

    /**
     * List all products in database with option of like filter.
     * 
     * @param {*} req 
     * @param {*} res 
     * @param {*} rtn 
     * @returns 
     */
    list = async (req, res, rtn) => {
        const { name } = req.body;
        let products = [];
        try {
            // 
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
            if (rtn === true) {
                return products;
            } else {
                res.send(products);
            }
        } catch (e) {
            console.log(e);
            res.status(500).send(e.message);
        }
    }

    /**
     * Render home page.
     * 
     * @param {*} req 
     * @param {*} res 
     */
    renderHome = async (req, res) => {
        try {
            let products = await this.list(req, res, true);
            res.render("home", { title: "Home", products: products });
        } catch (e) {
            console.log(e);
            res.status(500).send(e.message);
        }
    }

    /**
     * Render report page.
     * 
     * @param {*} req 
     * @param {*} res 
     */
     report = async (req, res) => {
        const html     = fs.readFileSync(path.join(__dirname, '../../views/template.html'), 'utf-8');
        const filename = Math.random() + '_doc' + '.pdf';
        const productController = new ProductController();
        try {
            let products = await productController.list(req, res, true);
            let array    = [];

            products.forEach(d => {
                const prod = {
                    id:    d.id,
                    name:  d.name,
                    price: parseFloat(d.price),
                    color: d.color
                }
                array.push(prod);
            });

            let subtotal = 0;
            products.forEach(i => {
                subtotal += parseFloat(i.price);
            });
            const tax = (subtotal * 20) / 100;
            const grandtotal = subtotal + tax;
            const obj = {
                prodlist: array,
                subtotal: subtotal,
                tax: tax,
                gtotal: grandtotal
            }

            const document = {
                html: html,
                data: {
                    products: obj
                },
                path: './docs/' + filename
            }
            pdf.create(document, options)
            .then(res => {
                console.log(res);
            }).catch(error => {
                console.log(error);
            });
            
            const filepath = 'http://localhost:3000/docs/' + filename;
            res.render("download", { path: filepath, title: "Report", products: products });
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
    get = async (req, res) => {
        const { id } = req.params;
        try {
            const product = await Product.findOne({ where: { id } });
            if (product) {
                res.send(product);
            } else {
                res.send({message: `Sorry, we don't have any product with id '${id}'`});
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
    create = async (req, res) => {
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

    /**
     * Update product by id in database.
     * 
     * @param {*} req 
     * @param {*} res 
     */        
    update = async (req, res) => {
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
                res.send({message: `Sorry, we don't have any product with id '${id}'`});
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
    delete = async (req, res) => {
        const { id } = req.params;
        try {
            const product = await Product.findOne({ 
                where: { id } 
            });
            if (product) {
                await product.destroy();
                res.send( {success: true});
            } else {
                res.send({message: `Sorry, we don't have any product with id '${id}'`});
            }
        } catch (e) {
            console.log(e);
            res.status(500).send(e.message);
        }
    }
}

module.exports = new ProductController();