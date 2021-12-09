const Animal = require('./Animal');

class Cat extends Animal {
    say() {
        return 'Cat goes "meow"';
    }
}

module.exports = Cat;