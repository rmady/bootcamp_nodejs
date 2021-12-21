/**
 * BairesDev NodeJS Bootcamp level 6.
 * Using sequelize create a model named Product, it should contain at least two properties.
 * 
 * @author  Rodrigo Mady
 * @project NodeJS Bootcamp
 */ 

const express = require('express');
const router  = express.Router();

const ProductController = require('./controllers/ProductController');

// Using express create an API with a product’s route containing the following methods:

// List products
router.get('/', ProductController.list);

// Get a product’s data
router.get('/:id', ProductController.get);

// Create product
router.post('/', ProductController.create);

// Update product
router.put('/:id', ProductController.update);

// Delete product
router.delete('/:id', ProductController.delete);

module.exports = router;