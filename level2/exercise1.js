/**
 * BairesDev NodeJS Bootcamp level 2.
 * Exercise 1.
 * Create an object that contains first name, last name and age properties.
 * 
 * @author  Rodrigo Mady
 * @project NodeJS Bootcamp
 */

// Create an object that contains first name, last name and age properties.
let person = {
    firstname: "Rodrigo",
    lastname:  "Mady",
    age:       26,
};

// create a function called greeting that will print to console Hello, firstName using template literals.
const greeting = (person) => console.log(`Hello, ${person.firstname}`);
greeting(person);