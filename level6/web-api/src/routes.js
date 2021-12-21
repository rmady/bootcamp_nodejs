/**
 * BairesDev NodeJS Bootcamp level 6.
 * Create a node server with DB connection.
 * 
 * @author  Rodrigo Mady
 * @project NodeJS Bootcamp
 */ 

const express = require('express');
const router  = express.Router();

router.get('/', (req, res) => {
    res.send('Hello user');
});

router.get('/user/:id', (req, res) => {
    if (req.params.id) res.send(req.params.id);
    res.send("No user specified");
});

router.post('/users', (req, res) => {
    let user = req.body.user;
    users.push(user);
    return res.send(`User ${user.name} has been added successfully!`);
});

module.exports = router;