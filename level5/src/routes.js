/**
 * BairesDev NodeJS Bootcamp level 5.
 * Create a node server.
 * 
 * @author  Rodrigo Mady
 * @project NodeJS Bootcamp
 */

const express         = require('express');
const UsersController = require('./controllers/UsersController');

const router = express.Router();
const user   = new UsersController();
  
var users =[{
  id: 1,
  name: "Rodrigo Mady",
  age : 23
}];

router.get('/', (req, res) => {
    res.send('Hello user')
})

router.get('/users', (req, res) => {
    return res.json(users);
});

router.post('/users', (req, res) => {
    let user = req.body.user;
    users.push(user);
    return res.send(`User ${user.name} has been added successfully!`);
});

module.exports = router;