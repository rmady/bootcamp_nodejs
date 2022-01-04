/**
 * BairesDev NodeJS Bootcamp level 5.
 * Create a node server.
 * 
 * @author  Rodrigo Mady
 * @project NodeJS Bootcamp
 */

const express    = require('express');
const routes     = require('./routes');
const bodyParser = require("body-parser");

const app  = express();
const port = 3000;

// Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes will go here.
app.use(routes);

// Start server.
module.exports = app.listen(port);
console.log('Server started at http://localhost:' + port);
