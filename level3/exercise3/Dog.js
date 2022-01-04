/**
 * BairesDev NodeJS Bootcamp level 3.
 * Exercise 3.
 * Working with classes.
 * 
 * @author  Rodrigo Mady
 * @project NodeJS Bootcamp
 */

const Animal = require('./Animal');

// create three more classes Dog, Cat, Fox that will override methods and fill out properties.
class Dog extends Animal {
    constructor(name, numberOfPaws, gender) {
        super(name, numberOfPaws, gender);
    }
    say() {
        let str = 'Dog goes "woof"';
        console.log(str);
        return str;
    }
}

module.exports = Dog;