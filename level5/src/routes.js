/**
 * BairesDev NodeJS Bootcamp level 5.
 * Create a node server.
 * 
 * @author  Rodrigo Mady
 * @project NodeJS Bootcamp
 */ 

const express         = require('express');
const UsersController = require('./controllers/UsersController');
const User            = require('./entities/User');

const router       = express.Router();
let user           = new User();
let userController = new UsersController();
let users          = user.listUsers();

router.get('/', (req, res) => {
    res.send('Hello user')
});

router.get('/users', (req, res) => {
    let name    = req.query.name;
    let matches = userController.search(name, users);
    return matches.length ? res.json(matches) : res.json(users);
});

router.post('/users', (req, res) => {
    let user = req.body.user;
    users.push(user);
    return res.send(`User ${user.name} has been added successfully!`);
});

module.exports = router;