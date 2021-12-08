/**
 * BairesDev NodeJS Bootcamp level 3.
 * Exercise 2.
 * Require the fs module and read one file asynchronous.
 * 
 * @author  Rodrigo Mady
 * @project NodeJS Bootcamp
 */

// At the root of your code base, create a txt file and add a “lorem ipsum”.

// Require the fs module.
 const fs = require('fs');
 //fs.readFile('/mnt/c/www/bootcamp_nodejs/level3/exercise2/lorem.txt', 'utf-8', (err, content) => {
fs.readFile('../lorem.txt', 'utf-8', (err, content) => {
    if (err) {
        return console.log(err);
    }
    console.log(content); // printed after
 });
 console.log("reading file"); // printed before