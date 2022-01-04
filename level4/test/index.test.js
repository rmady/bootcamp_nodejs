const assert  = require('assert');
const promiseWaitTo = require('../exercise2');

describe('Functions exercise 2', () => {
    it('Wait to function test', () => {
        promiseWaitTo(100)
        .then( res => {
            assert.ok(true);
        });
    });
});
