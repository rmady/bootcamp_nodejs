/**
 * BairesDev NodeJS Bootcamp level 4.
 * Exercise 2.
 * Refactor using Promise.
 * 
 * @author  Rodrigo Mady
 * @project NodeJS Bootcamp
 */

// Given the following code:
function waitTo(ms, callback) {
    setTimeout(() => callback('done!'), ms);
}
 
waitTo(1200, (result) => { 
    console.log(result);
})
// refactor it to use Promise:

let promiseWaitTo = ms => new Promise((resolve, reject) => {
    setTimeout(() => resolve('done with Promisse!'), ms);
});

promiseWaitTo(600)
    .then((result) => {
        //console.log(result);
    });

// refactor it to use Promise async/await
let promiseAsyncWaitTo = async ms => {
    return new Promise(resolve => {
        setTimeout(() => resolve('done with Promisse async/await!'), ms);
    });
}

promiseWaitTo(1000)
    .then((result) => {
        console.log(result);
        return promiseAsyncWaitTo(2000);
    })
    .then((result) => {
        console.log(result);
    });