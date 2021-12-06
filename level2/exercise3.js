/**
 * BairesDev NodeJS Bootcamp level 2.
 * Exercise 3.
 * Create a function that prints to the console “first age”, “second age” or “third age”.
 * 
 * @author  Rodrigo Mady
 * @project NodeJS Bootcamp 
 */

 let person = {
    firstname: "Rodrigo",
    lastname:  "Mady",
    age:       26,
};
// Create a function that prints to the console “first age”, “second age” or 
// “third age” based on the object’s age property passed as parameter.  
let whichAge = (person) => {
    let age = '';

    // First age is less or equal 30.
    if(person.age <= 30) {
        age = 'first age';

    // Second age is greater than 30 and less or equal 60.
    } else if (person.age > 30 && person.age < 60) {
        age = 'second age';

    // Third age is greater than 60.
    } else {
        age = 'third age';
    }
    console.log(age);
};

whichAge(person);