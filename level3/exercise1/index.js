/**
 * BairesDev NodeJS Bootcamp level 3.
 * Exercise 1.
 * Create a class with at least 4 properties.
 * 
 * @author  Rodrigo Mady
 * @project NodeJS Bootcamp
 */

// require that class in index.js and create an instance, for each property of that instance
// print to console propName: propValue, where propName is the name of the property and propValue is the corresponding value.
const Person = require('./Person'); // no need to explicit the file extension
const person = new Person('Rodrigo Mady', 26, true, ['Chanel', 'Dior', 'Pipoca Pantufa']);

for (const prop in person) {
    console.log(`${prop}: ${person[prop]}`);
}