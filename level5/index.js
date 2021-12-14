/**
 * BairesDev NodeJS Bootcamp level 5.
 * Create a node server.
 * 
 * @author  Rodrigo Mady
 * @project NodeJS Bootcamp
 */

const express = require('express');
const app     = express();
 
app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(3000)