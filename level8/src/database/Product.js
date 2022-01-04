/**
 * BairesDev NodeJS Bootcamp level 6.
 * Level 8 - Final Project.
 * 
 * @author  Rodrigo Mady
 * @project NodeJS Bootcamp
 */

const Product = require('./src/entities/product.model');

// Create products in database.
(async () => {
    await Product.sync({ force: true});
    const phone = Product.build({
        name: 'External HDD',
        price: 100,
        color: 'black'
    });
    await phone.save();
    console.log(phone.toJSON());

    const notebook = Product.create({
        name: 'Notebook',
        price: 2000,
        color: 'blue'
    });
    console.log(notebook.toJSON());
})();