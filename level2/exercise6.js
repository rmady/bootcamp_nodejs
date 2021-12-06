/**
 * BairesDev NodeJS Bootcamp level 2.
 * Exercise 6.
 * Create an array of objects containing first name and last name, and turn it into an array of full names.
 * 
 * @author  Rodrigo Mady
 * @project NodeJS Bootcamp
 */

// Create an array of objects containing first name and last name.
let arr = [
    {
        'firstname': 'Rodrigo',
        'lastname' : 'Mady',
    },
    {
        'firstname': 'Jorge',
        'lastname' : 'Diaz',
    },
    {
        'firstname': 'Caroline',
        'lastname' : 'Zampiron',
    },
    {
        'firstname': 'Pipoca',
        'lastname' : 'Pantufa',
    }
];

// Turn it into an array of full names.
console.log(arr);
arr = arr.map(elem =>  `${elem.firstname} ${elem.lastname}`);
console.log(arr);

// Given the array
let arrayNumbers = [30, 5, 5, 18, 43, 16, 21, 16, 24, 4, 38, 3, 18, 19, 18, 42, 6, 35, 38, 43];

// Sort them in a way that evens come before the odds
arrayNumbers.sort((e1, e2) => {
    if (e1 % 2 == 0 && e2 % 2 != 0) {
        return -1;
    } else if (e1 % 2 != 0 && e2 % 2 == 0) {
        return 1;
    }   
    return 0;
});
console.log(arrayNumbers);

// Then sort them from lowest to highest.
arrayNumbers.sort((e1, e2) => {
    if (e1 % 2 == 0 && e2 % 2 == 0) {
        return e1 - e2;
    } else if (e1 % 2 != 0 && e2 % 2 != 0) {
        return e1 - e2;
    }
    return 0;
});
console.log(arrayNumbers);