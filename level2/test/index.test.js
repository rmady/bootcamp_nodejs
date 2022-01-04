const assert  = require('assert');
const exercise2 = require('../exercise2');

describe('Functions exercise 2', () => {
    let person = {
        firstname: "Rodrigo",
        lastname:  "Mady",
        age:       26
    };
    it('Increment age', () => {
        exercise2.incrementAge(person, 5);
        assert.ok(person.age === 31);
    });

    
    it('Dencrement age', () => {
        exercise2.decrementAge(person, 5);
        assert.ok(person.age === 26);
    });
});
