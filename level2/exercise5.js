/**
 * BairesDev NodeJS Bootcamp level 2.
 * Exercise 5.
 * Create a function that receives any number of parameters.
 * 
 * @author  Rodrigo Mady
 * @project NodeJS Bootcamp
 */

// Create a function that receives any number of parameters, for each parameter:
// do nothing if parameter is not a string
// prints JSON object of that string if it’s a valid JSON string
// if deserialized object contains an age property, sum all ages and return the total.  
const checkParams = (...args) => {
    
};

// Use the following parameters to test: 
// (15,'{"name": "John"}',"",'{"age":"30"}','{"age": "45"}')
checkParams(15,'{"name": "John"}',"",'{"age":"30"}','{"age": "45"}');