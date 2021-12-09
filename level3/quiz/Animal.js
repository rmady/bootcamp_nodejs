class Animal {
    constructor(name, numberOfPaws, gender) {
        this.name = name;
        this.numberOfPaws = numberOfPaws;
        this.gender = gender;
    }

    say() {
        return "Hello, I'm an animal";
    }

    info() {
        return `My name is ${this.name} and I have ${this.numberOfPaws} paws. I'm ${this.gender}`;
    }
}

module.exports = Animal;