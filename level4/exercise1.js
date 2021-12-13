/**
 * BairesDev NodeJS Bootcamp level 4.
 * Exercise 1.
 * Create an async function.
 * 
 * @author  Rodrigo Mady
 * @project NodeJS Bootcamp
 */

// Create an async function that returns an array of integers after 2 seconds.
let arrIntegers = () => new Promise((resolve, reject) => {
    console.log("here we goo");
    setTimeout(() => { resolve([2, 3, 5, 7, 11, 13]); }, 2000);
});

// async/await
let arrIntegersNew = async() => {
    console.log("here we goo 2");
    return await sleep(2000, [17, 19, 23, 29, 31, 37]);
}

let sleep = (ms, arrIntegers) => {
    return new Promise(resolve => setTimeout(() => { resolve(arrIntegers); }, ms));
}

// Iterate over the result printing each value to console. DO NOT USE CALLBACKS
arrIntegers()
    .then((arr) => {
        arr.forEach(element => {
            console.log(element);
        });
        return arrIntegersNew();
    })
    .then((arr) => {
        arr.forEach(element => {
            console.log(element);
        });
    });