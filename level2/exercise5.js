/**
 * BairesDev NodeJS Bootcamp level 2.
 * Exercise 5.
 * Create a function that receives any number of parameters.
 * 
 * @author  Rodrigo Mady
 * @project NodeJS Bootcamp
 */

// Create a function that receives any number of parameters, for each parameter:
let checkParams = (...args) => {
    let totalAge = 0;
    args.forEach(elem => {
        // Do nothing if parameter is not a string.
        if (Object.prototype.toString.call(elem) === '[object String]') {
            // Prints JSON object of that string if it’s a valid JSON string.
            try {
               let obj = JSON.parse(elem);
               console.log(obj);
               // If deserialized object contains an age property, sum all ages and return the total.
               totalAge += obj.age ? parseInt(obj.age) : 0;
            } catch (e) {
                return false;
            }          
        } else {
            return false;
        }
    });
    return totalAge;
};

// Use the following parameters to test: 
// (15,'{"name": "John"}',"",'{"age":"30"}','{"age": "45"}')
console.log(checkParams(15,'{"name": "John"}',"",'{"age":"30"}','{"age": "45"}'));