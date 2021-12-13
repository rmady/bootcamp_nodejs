/**
 * BairesDev NodeJS Bootcamp level 4.
 * Quiz 4.
 * 
 * @author  Rodrigo Mady
 * @project NodeJS Bootcamp
 */

// 1. Create an async function that returns an array of integers after 2 seconds, 
// iterate over the result printing each value to console.

let arr = [1, 2, 3, 5, 7, 11, 13];

let arrayOfIntegersWithDelay = async() => {
    return await interval(arr, 2000)
}

let interval = (arr, ms) => {
    return new Promise( (resolve) => {
        setTimeout(() => {
            resolve(arr)
        }, ms);
    });
}

/**arrayOfIntegersWithDelay()
    .then( (result) => {
        result.forEach(element => {
            console.log(element); 
        });
    });
*/

// 2. Given the following code, 
function waitTo(ms, callback) {
    setTimeout(() => callback('done!'), ms);
}
 
/**waitTo(1500, (result) => { 
    console.log(result);
})
*/

// refactor it to use Promise:

let waitToPromisse = async ms => {
    return new Promise( (resolve) => {
        setTimeout(() => resolve('done with Promisse!'), ms);
    })
}

/** waitToPromisse(1000)
    .then((result) => {
        console.log(result);
    });
*/

// 3. Create a variable named num and increment its value inside a 
// setInterval every 1200 ms. it should print the updated value always until the program is exited.
let num = 10;
let incrementNum = async (num, ms) => {
    return new Promise((resolve) => {
        setInterval(() => {
            num++;
            console.log(num);
        }, ms);
    })
}

incrementNum(num, 1200)
    .then((result) => { });