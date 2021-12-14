/**
 * BairesDev NodeJS Bootcamp level 5.
 * Create a node server.
 * 
 * @author  Rodrigo Mady
 * @project NodeJS Bootcamp
 */

const express         = require('express');
const UsersController = require('./controllers/UsersController');

const router  = express.Router();
const user    = new UsersController();
  
router.get('/', function (req, res) {
    res.send('Hello World')
})
router.get('/users', function(req, res) {
    const user_name = req.query.name;
    res.send({
      'user_name': user_name
    });
});
router.post('/users', user.create);

module.exports = router;