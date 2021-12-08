/**
 * BairesDev NodeJS Bootcamp level 3.
 * Exercise 3.
 * 
 * @author  Rodrigo Mady
 * @project NodeJS Bootcamp
 */

// Dog.
const Dog = require('./Dog');
const dog = new Dog('Chanel', 4, 'female');
dog.info();
dog.say();

// Cat.
const Cat = require('./Cat');
const cat = new Cat('Dior', 4, 'male');
cat.info();
cat.say();

// Fox.
const Fox = require('./Fox');
const fox = new Fox('Pipoca Pantufa', 4, 'male');
fox.info();
fox.say();