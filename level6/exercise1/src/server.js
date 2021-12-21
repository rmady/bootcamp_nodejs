/**
 * BairesDev NodeJS Bootcamp level 6.
 * Using sequelize create a model named Product, it should contain at least two properties.
 * 
 * @author  Rodrigo Mady
 * @project NodeJS Bootcamp
 */ 

const express    = require('express');
const routes     = require('./routes');
const bodyParser = require('body-parser');

const app  = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended:false }));
app.use(bodyParser.json());

app.use(routes);
app.listen(port);
console.log(`Server is up and runnining: ${port}`);