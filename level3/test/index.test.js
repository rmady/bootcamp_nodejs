const assert  = require('assert');
const Fox = require('../exercise3/Fox');
const Cat = require('../exercise3/Cat');
const Dog = require('../exercise3/Dog');

describe('Functions exercise 3', () => {
    const dog = new Dog('Chanel', 4, 'female');
    it('Dog info', () => {
        assert.ok(Object.prototype.toString.call(dog.info()) === '[object String]');
    });

    it('Dog say', () => {
        assert.ok(Object.prototype.toString.call(dog.say()) === '[object String]'); 
    });

    const cat = new Cat('Simba', 4, 'male');
    it('Cat info', () => {
        assert.ok(Object.prototype.toString.call(cat.info()) === '[object String]');
    });

    it('Cat say', () => {
        assert.ok(Object.prototype.toString.call(cat.say()) === '[object String]'); 
    });

    const fox = new Fox('Pipoca Pantufa', 4, 'male');
    it('Fox info', () => {
        assert.ok(Object.prototype.toString.call(fox.info()) === '[object String]');
    });

    it('Fox say', () => {
        assert.ok(Object.prototype.toString.call(fox.say()) === '[object String]'); 
    });
});
