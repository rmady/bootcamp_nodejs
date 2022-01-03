const assert  = require('assert');
const app     = require('../index');
const request = require('supertest');
const Product = require('../src/entities/product.model');
const ProductController = require('../src/controllers/ProductController');

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

describe('GET /products', () => {
    it('should repond with JSON object containing all products', () => {
        return request(app)
        .get('/products')
        .expect(200)
        .then(res => {
            assert.ok(res.body.length > 0);
        });
    });
});

describe('GET /:id', () => {
    it('should repond with JSON object containing one product', () => {
        return request(app)
        .get('/1')
        .expect(200)
        .then(res => {
            assert.ok(res.body.id === 1);
        });
    });

    it('should repond with one string with no product found', () => {
        return request(app)
        .get('/101')
        .expect(200)
        .then(res => {
            assert.ok(Object.prototype.toString.call(res.body.message) === '[object String]');
        });
    });
});

describe('POST /report', () => {
    it('should repond with an HTML object', () => {
        return request(app)
        .post('/report')
        .expect(200)
        .then(res => {
            assert.ok(true);
        });
    });

    it('should repond with an HTML object with filter', () => {
        return request(app)
        .post('/report')
        .send({"name": "Monitor"})
        .expect(200)
        .then(res => {
            assert.ok(true);
        });
    });

    it('should repond with a string with no product founded', () => {
        return request(app)
        .post('/report')
        .send({"name": "blablabla"})
        .expect(200)
        .then(res => {
            assert.ok(true);
        });
    });
});

let product = {
	"name": "Monitor",
	"price": 100,
	"color": "white"
};

describe('POST /', () => {
    it('should create a new product', () => {
        return request(app)
        .post('/')
        .send(product)
        .expect(200)
        .then(res => {
            assert.ok(res.body.id > 0);
        });
    });
});

describe('PUT /:id', () => {
    
    it('should update and repond with JSON object containing one product', () => {
        let product = {
            "name": "Monitor Updated",
            "price": 1000,
            "color": "whitee"
        };
        let prod = Product.findOne({
            limit: 1,
            order: [[ 'id', 'DESC']]
        }).then( prod => {
            return request(app)
            .put(`/${prod.id}`)
            .send(product)
            .expect(200)
            .then(res => {
                assert.ok(res.body.name === prod.name);
            });
        });
    });

    it('should repond with a string with no product found', () => {
        return request(app)
        .put('/10000')
        .send(product)
        .expect(200)
        .then(res => {
            assert.ok(Object.prototype.toString.call(res.body.message) === '[object String]');
        });
    });
});

describe('DELETE /', () => {
    it('should delete one product', () => {
        let prod = Product.findOne({
            limit: 1,
            order: [[ 'id', 'DESC']]
        }).then( prod => {
            return request(app)
            .delete(`/${prod.id}`)
            .expect(200)
            .then(res => {
                assert.ok(res.body.success === true);
            });
        });        
    });

    
    it('should try to delete one product and don`t found it', () => {
        return request(app)
        .delete(`/100000`)
        .expect(200)
        .then(res => {
            assert.ok(Object.prototype.toString.call(res.body.message) === '[object String]');
        });      
    });
});