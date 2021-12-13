/**
 * BairesDev NodeJS Bootcamp level 4.
 * Exercise 3.
 * Create a variable named num and increment its value inside a setInterval every 1200 ms.
 * 
 * @author  Rodrigo Mady
 * @project NodeJS Bootcamp
 */

// Create a variable named num and increment its value inside a setInterval every 1200 ms. 
let num = 20;
let promiseIncrementNum = (num, ms) => {
    return new Promise((resolve, reject) => {
        resolve (setInterval(() => {
            num++;
            console.log(num);
        }, 1200));
    });
}

let promiseIncrementNumAwait = async (num, ms) => {
    return await new Promise(resolve => { 
        resolve (setInterval(() => {
            num++;
            console.log(num);
        }, 1200));
    });
}



// it should print the updated value always until the program is exited.
promiseIncrementNum(num, 1200).then((result) => {});

promiseIncrementNumAwait(num, 1200).then((result) => {});
