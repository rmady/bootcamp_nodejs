/**
 * BairesDev NodeJS Bootcamp level 6.
 * Level 8 - Final Project.
 * 
 * @author  Rodrigo Mady
 * @project NodeJS Bootcamp
 */

const express    = require('express');
const bodyParser = require('body-parser');
const path       = require('path');
const routes     = require(path.join(__dirname, "/src/routes"));

const port = 3000;
const app  = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(express.static(__dirname + '/public'));
app.use('/docs', express.static(path.join(__dirname, 'docs')));
app.use(bodyParser.urlencoded({ 'extended' : false }));
app.use(bodyParser.json());
app.use(routes);

module.exports = app.listen(port);
console.log(`Server is high and running at port ${port}`);
