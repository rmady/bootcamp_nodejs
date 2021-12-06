/**
 * BairesDev NodeJS Bootcamp level 1.
 * Simple test 1.
 * 
 * @author  Rodrigo Mady
 * @project NodeJS Bootcamp
 */


// 1. Build a program to declare and compare two variables (integer and string)
let int = 1;
let str = "1";

let compareStrInt = int == str;

console.log(compareStrInt);


// 2. Create 5 variables of different types and for each one print to console its type
let string  = "1";
let integer = 1;
let arr     = ["1", 1, undefined];
let und     = undefined;
let bool    = true;

console.log(typeof(string));
console.log(typeof(int));
console.log(typeof(arr));
console.log(typeof(und));
console.log(typeof(bool));