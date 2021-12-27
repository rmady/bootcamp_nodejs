/**
 * BairesDev NodeJS Bootcamp level 6.
 * Level 8 - Final Project.
 * 
 * @author  Rodrigo Mady
 * @project NodeJS Bootcamp
 */

const express    = require('express');
const routes     = require('./routes');
const bodyParser = require('body-parser');

const port = 3000;
const app  = express();

app.use(bodyParser.urlencoded({ 'extended' : false }));
app.use(bodyParser.json());
app.use(routes);

app.listen(port);
console.log(`Server is high and running at port ${port}`);