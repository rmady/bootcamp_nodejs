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

class ProductController {

    async list(req, res, rtn) {
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

    async renderHome(req, res) {
        try {
            const productController = new ProductController();
            let products = await productController.list(req, res, true);
            res.render("home", { title: "Home", products: products });
        } catch (e) {
            console.log(e);
            res.status(500).send(e.message);
        }
    }

    
    async report(req, res) {
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
            const grandtotal = subtotal - tax;
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

    async get(req, res) {
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
                res.send({message: `Sorry, we don't have any product with id '${id}'`});
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