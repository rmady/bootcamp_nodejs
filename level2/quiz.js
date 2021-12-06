/**
 * BairesDev NodeJS Bootcamp level 2.
 * Simple test 2.
 * 
 * @author  Rodrigo Mady
 * @project NodeJS Bootcamp
 */


// 1. Create an object that contains first name, last name and age properties, 
// create a function called greeting that will print to console Hello, firstName using template literals.

let person = {
    "firstname": "Rodrigo",
    "lastname":  "Mady",
    "age"      : 66
}

let greeting = (obj) => console.log(`Hello, ${obj.firstname}`);

// greeting(person);

// 2. Using the same object of the previous item, 
// create a function to increment age, another to decrement age, both receiving the amount as parameter.

let incrementAge = (obj, incrementer) => obj.age + incrementer;
let decrementAge = (obj, decrementer) => obj.age - decrementer;

// console.log(incrementAge(person, 10));
// console.log(decrementAge(person, 20));

// 3. Create a function that prints to the console 
// "first age", "second age" or "third age" based on the object's age property passed as parameter. 

let whichAge = (obj) => {
    let age = '';
    if(obj.age <= 30) {
        age = 'first age';
    } else if(obj.age > 30 && obj.age < 60) {
        age = 'second age';
    } else {
        age = 'third age';
    }
    return console.log(age);
}

// whichAge(person);

// 4. Following the 2nd exercise of the previous lecture, 
// create a function that receives a parameter and prints to console the type of that parameter
let str  = "1";
let int  = 1;
let bool = true;

let whichType = (param) => console.log(typeof(param));
// whichType(str);
// whichType(int);
// whichType(bool);

// 5. Create a function that receives any number of parameters, for each parameter: 
// do nothing if parameter is not a string, and prints JSON object of that string 
// if it's a valid JSON string, if deserialized object contains an age property, sum all ages and return the total.

let checkParams = (...args) => {
    let totalAge = 0;
    args.forEach( elem => {
        if(Object.prototype.toString.call(elem) === '[object String]') {
            try{
                let json = JSON.parse(elem);
                console.log(json);
                totalAge += json.age ? parseInt(json.age) : 0;
            } catch(e) {
                //console.log(e)
                return false;
            }
        }
    });
    return totalAge;
}

// console.log(checkParams(15,'{"name": "John"}',"",'{"age":"35"}','{"age": "45"}'));

// 6. Create an array of objects containing first name and last name, 
// and turn it into an array of full names

let people = [
    {'firstname': 'Rodrigo', 'lastname': 'Mady'},
    {'firstname': 'Jorge',   'lastname': 'Diaz'},
    {'firstname': 'Pipoca',  'lastname': 'Pantufa'},
];
// console.log(people);
people = people.map(elem => `${elem.firstname} ${elem.lastname}`);
// console.log(people);


// 7. Given the array [30, 5, 5, 18, 43, 16, 21, 16, 24, 4, 38, 3, 18, 19, 18, 42, 6, 35, 38, 43]
// sort them in a way that evens come before them odds, and them sort them from lowest to highest.
let numbers = [30, 5, 5, 18, 43, 16, 21, 16, 24, 4, 38, 3, 18, 19, 18, 42, 6, 35, 38, 43];
numbers.sort((a, b) => a - b);
numbers.sort((a, b) => {
    if(a % 2 == 0 && b % 2 != 0) {
        return -1;
    } else if(a % 2 != 0 && b % 2 == 0) {
        return 1
    } else {
        return 0;
    }
});
console.log(numbers);
numbers.sort((a, b) => {
    if (a % 2 == 0 && b % 2 == 0) {
        return 1;
    } else if(a % 2 != 0 && b % 2 != 0) {
        return 1;
    } else {
        return 0;
    }
});
console.log(numbers);