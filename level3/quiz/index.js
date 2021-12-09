/**
 * BairesDev NodeJS Bootcamp level 3.
 * Simple test 2.
 * 
 * @author  Rodrigo Mady
 * @project NodeJS Bootcamp
 */

// 1. Create a class with at least 4 properties (try to use different types) in a separate file, 
// require that class in index.js and create an instance, for each property of that instance 
// print to console propName: propValue, where propName is the name of the property and propValue is the corresponding value.

let Person = require('./Person');
let person = new Person('Rodrigo Mady', 26, true, ['Alok', 'Red Hot', 'ACDC', 'Foo Fighters']);
//console.log(person);

for(let prop in person) {
    //console.log(`${prop}: ${person[prop]}`);
}


// 2. At the root of your code base, create a txt file and add a "lorem ipsum" to it, require the 
// fs module and read that file asynchronous, after calling the readFile 
// method print to console "reading file", after finishing reading file content print the content to console.
const fs = require('fs');
fs.readFile('/mnt/c/www/bootcamp_nodejs/file.txt', 'utf-8', (err, content) => {
    if (err) {
        return console.log(`Sorry, something got wrong: ${err}`);
    }
    //console.log(content);
})
// console.log('reading file');


// 3. Create a class named Animal that has three properties name, numberOfPaws, gender and two methods named say and info, 
// then create three more classes Dog, Cat, Fox that will override methods and fill out properties
const Dog = require('./Dog');
const dog = new Dog('Dior', 4, 'male');
console.log(dog.say());
console.log(dog.info());

const Cat = require('./Cat');
const cat = new Cat('Simba', 4, 'male');
console.log(cat.say());
console.log(cat.info());

const Fox = require('./Fox');
const fox = new Fox('Firefox', 0, 'female');
console.log(fox.say());
console.log(fox.info());