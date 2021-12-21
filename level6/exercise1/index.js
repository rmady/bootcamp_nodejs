/**
 * BairesDev NodeJS Bootcamp level 6 Exercise 1.
 * Using sequelize create a model named Product, it should contain at least two properties.
 * 
 * @author  Rodrigo Mady
 * @project NodeJS Bootcamp
 */

const Product = require('./src/entities/product.model');

(async () => {
    await Product.sync({ force: true});
    const phone = Product.build({
        name: 'External HDD',
        description: '',
        price: 100,
        color: 'black'
    });
    await phone.save();
    console.log(phone.toJSON());

    const notebook = Product.create({
        name: 'Notebook',
        description: 'Dell',
        price: 2000,
        color: 'blue'
    });
    console.log(notebook.toJSON());
})();