/**
 * BairesDev NodeJS Bootcamp level 2.
 * Exercise 2.
 * Create a functions.
 * 
 * @author  Rodrigo Mady
 * @project NodeJS Bootcamp
 */

// Using the same object of the previous item. 
let person = {
    firstname: "Rodrigo",
    lastname:  "Mady",
    age:       26,
};

// Create a function to increment age.
let incrementAge = (person, increment) => person.age + increment;
console.log(`Incrementation: ${incrementAge(person, 5)}`);

// Another to decrement age, both receiving the amount as parameter.
let decrementAge = (person, decrement) => person.age - decrement;
console.log(`Decrementation: ${decrementAge(person, 15)}`);