/**
 * BairesDev NodeJS Bootcamp level 3.
 * Exercise 1.
 * Create a class with at least 4 properties.
 * 
 * @author  Rodrigo Mady
 * @project NodeJS Bootcamp
 */


// Create a class with at least 4 properties (try to use different types) in a separate file
class Person {
    constructor(name, age, hasChild, children) {
        this.name     = name;
        this.age      = age;
        this.hasChild = hasChild;
        this.children = children;
    }
}

module.exports = Person;