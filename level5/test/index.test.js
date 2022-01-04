/**
 * BairesDev NodeJS Bootcamp level 6.
 * Level 8 - Final Project.
 * 
 * @author  Rodrigo Mady
 * @project NodeJS Bootcamp
 */

const assert  = require('assert');
const request = require('supertest');
const app     = require('../src/server');
const User    = require('../src/entities/User');
const UserController = require('../src/controllers/UsersController');

describe('GET /', () => {
    it('should repond with access to URL', () => {
        return request(app)
        .get('/')
        .expect(200)
        .then(res => {
            assert.ok(true);
        });
    });
});

describe('GET /users', () => {
    it('should repond with JSON object containing all users', () => {
        return request(app)
        .get('/users')
        .expect(200)
        .then(res => {
            assert.ok(res.body.length > 0);
        });
    });

    it('should repond with JSON object containing filtered users', () => {
        return request(app)
        .get('/users')
        .send({'name' : 'pipoca'})
        .expect(200)
        .then(res => {
            assert.ok(res.body.length > 0);
        });
    });
});

describe('POST /users', () => {
    let user = {
        "user": {
            "id": 3,
            "name": "Pipoca Pantuga",
            "age" : 1
        }
    };
    it('should repond with an JSON object containing the user added', () => {
        return request(app)
        .post('/users')
        .send(user)
        .expect(200)
        .then(res => {
            assert.ok(res.body.id === user.id);
        });
    });
});