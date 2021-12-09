/**
 * BairesDev NodeJS Bootcamp level 4.
 * Exercise 1.
 * Create an async function.
 * 
 * @author  Rodrigo Mady
 * @project NodeJS Bootcamp
 */

// Create an async function that returns an array of integers after 2 seconds.
function arrIntegers() {
    return new Promise((resolve, reject) => {
        console.log("here we goo");
        setTimeout((
            function() {
                resolve([1, 2, 3, 5, 7, 11, 13, 17, 19, 23]);
            }
        ), 2000);
    });
}
// Iterate over the result printing each value to console. DO NOT USE CALLBACKS
arrIntegers().then((arr) => {
    arr.forEach(element => {
        console.log(element);
    });
});