/**
 * BairesDev NodeJS Bootcamp level 3.
 * Exercise 3.
 * Create a class named Animal.
 * 
 * @author  Rodrigo Mady
 * @project NodeJS Bootcamp
 */

// Create a class named Animal that has three properties name, numberOfPaws, gender and two methods named say and info.
class Animal {
    constructor(name, numberOfPaws, gender) {
        this.name         = name;
        this.gender       = gender; 
        this.numberOfPaws = numberOfPaws;
    }

    say() {

    }

    info() {
        let str = `My name is ${this.name}, I have ${this.numberOfPaws} paws and I'm ${this.gender}`;
        console.log(str);
        return str;
    }
}

module.exports = Animal;