// 1. Using sequelize create a model named Product, it should contain at least two properties.

/**
* 2. Using express create an API with a product's route containing the following methods:
* List products
* Create product
* Get a product's data
* Update product
* Delete product
*/

const Product = require('./src/entities/product.model');

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