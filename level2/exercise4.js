/**
 * BairesDev NodeJS Bootcamp level 2.
 * Exercise 4.
 * Create a function that receives a parameter and prints to console the type of that parameter.
 * 
 * @author  Rodrigo Mady
 * @project NodeJS Bootcamp
 */

 let person = {
    firstname: "Rodrigo",
    lastname:  "Mady",
    age:       26,
};
// Create a function that receives a parameter and prints to console the type of that parameter.  
let checkParamType = (param) => console.log(typeof(param));

checkParamType(person.firstname);
checkParamType(person.age);