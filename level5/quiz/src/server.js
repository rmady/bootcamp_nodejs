// 1. Create a node server that listens for a POST request containing a name in the body, 
// it should add this name to a list (can keep the array in memory), 
// also create a request handler that listens for a GET request and returns all names on the list as json.

const express    = require('express');
const bodyParser = require("body-parser");

const app  = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let users = [
    {'name':'Rodrigo Mady'}, 
    {'name':'Jorge Diaz'}
];

/**app.get('/', (req, res) => {
    let name = req.query.name;
    console.log(name);
    return res.json(users);
});*/

app.post('/', (req, res) => {
    let user = req.body.user;
    users.push(user);
    return res.send(`User ${user.name} is in the list`);
});

app.listen(port);

console.log('Server is up')


// 2. Refactor the GET request method to accept a query parameter named name, and search a name using regex.
app.get('/', (req, res) => {
    let name = req.query.name;
    let match = [];
    if (name) {
        regexexp = new RegExp(`${name}\\B`, 'gi');
        match = users.filter(({name}) => name.match(regexexp));
    }   
    return match.length ? res.json(match) : res.json(users);
});