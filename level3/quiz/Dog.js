const Animal = require('./Animal');

class Dog extends Animal {
    say() {
        return 'Dog goes "woof"';
    }
}

module.exports = Dog;