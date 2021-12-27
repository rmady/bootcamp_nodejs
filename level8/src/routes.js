/**
 * BairesDev NodeJS Bootcamp level 8.
 * Level 8 - Final Project.
 * 
 * @author  Rodrigo Mady
 * @project NodeJS Bootcamp
 */

const express = require('express');
const router  = express.Router();
const ProductController = require('./controllers/ProductController');

router.get('/', ProductController.list);
router.get('/:id', ProductController.get);
router.post('/', ProductController.create);
router.put('/:id', ProductController.update);
router.delete('/:id', ProductController.delete);


module.exports = router;