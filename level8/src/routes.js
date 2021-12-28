/**
 * BairesDev NodeJS Bootcamp level 8.
 * Level 8 - Final Project.
 * 
 * @author  Rodrigo Mady
 * @project NodeJS Bootcamp
 */

const express = require('express');
const router  = express.Router();
const pug     = require('pug');
const path    = require('path');

const ProductController = require('./controllers/ProductController');
const compiledFunction = pug.compileFile(path.join(__dirname, '../views/home.pug'));

router.get('/', (req, res) => {
    res.render("home", { title: "Home" });
});

router.get('/:id', ProductController.get);
router.post('/', ProductController.create);
// Create a new endpoint (POST) that will generate a report file (can be .pdf, .xsls, .txt you choose) for the products. 
// This report file should have all the products on the DB with summary information. One product for each line.
router.post('/report', ProductController.report);
router.put('/:id', ProductController.update);
router.delete('/:id', ProductController.delete);


module.exports = router;