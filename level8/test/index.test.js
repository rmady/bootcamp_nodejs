const assert  = require('assert');
const app     = require('../index');
const request = require('supertest');
const Product = require('../src/entities/product.model');

describe('GET /', () => {
    it('should repond with HTML object', () => {
        return request(app).get('/')
            .expect(200)
            .then(res => {
                assert.ok(res.body);
            });
    });
});

describe('GET /products', () => {
    it('should repond with JSON object containing all products', () => {
        return request(app).get('/products')
            .expect(200)
            .then(res => {
                assert.ok(res.body.length > 0);
            });
    });
});

describe('GET /:id', () => {
    it('should repond with JSON object containing one product', () => {
        return request(app).get('/1')
            .expect(200)
            .then(res => {
                assert.ok(res.body.id === 1);
            });
    });

    it('should repond with one string with no product found', () => {
        return request(app).get('/101')
            .expect(200)
            .then(res => {
                console.log(res.body.message === true);
            });
    });
});

/** 
describe('POST /report', () => {
    it('should repond with HTML object', () => {
        return request(app).post('/report')
            .expect(200)
            .then(res => {
                assert.ok(res.body > 0);
            });
    });
});
*/
const product = {
	"name": "Monitor",
	"price": 100,
	"color": "white"
};
describe('PUT /:id', () => {
    it('should update and repond with JSON object containing one product', () => {
        return request(app)
            .put('/3')
            .send(product)
            .expect(200)
            .then(res => {
                assert.ok(res.body.name === product.name);
            });
    });

    it('should repond with a string with no product found', () => {
        return request(app)
            .put('/103')
            .send(product)
            .expect(200)
            .then(res => {
                console.log(res.body.message === true);
            });
    });
});

describe('POST /', () => {
    it('should create a new product', () => {
        return request(app).post('/')
            .send(product)
            .expect(200)
            .then(res => {
                assert.ok(res.body.id > 0);
            });
    });
});