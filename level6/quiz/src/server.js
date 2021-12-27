const express = require('express');
const routes  = require('./routes');
const bodyParser = require('body-parser');

const port = 3000;
const app  = express();

app.use(bodyParser.urlencoded( { extended : false } ));
app.use(bodyParser.json());

app.use(routes);

app.listen(port);
console.log(`Server is up and running at port: ${port}`);