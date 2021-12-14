/**
 * BairesDev NodeJS Bootcamp level 5.
 * Create a node server.
 * 
 * @author  Rodrigo Mady
 * @project NodeJS Bootcamp
 */

const express = require('express');
const routes  = require('./routes');

const app  = express();
const port = 3000;

// routes will go here
app.use(routes);
app.listen(port);
console.log('Server started at http://localhost:' + port);