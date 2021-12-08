/**
 * BairesDev NodeJS Bootcamp level 3.
 * Exercise 3.
 * Working with classes.
 * 
 * @author  Rodrigo Mady
 * @project NodeJS Bootcamp
 */

 const Animal = require('./Animal');

 // create three more classes Dog, Cat, Fox that will override methods and fill out properties.
 class Fox extends Animal {
     constructor(name, numberOfPaws, gender) {
         super(name, numberOfPaws, gender);
     }
     say() {
         console.log('Ring-ding-ding-ding-dingeringeding! Gering-ding-ding-ding-dingeringeding! Gering-ding-ding-ding-dingeringeding!');
     }
 }
 
 module.exports = Fox;