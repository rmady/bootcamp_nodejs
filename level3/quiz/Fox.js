const Animal = require('./Animal');

class Fox extends Animal {
    say() {
        return 'Ring-ding-ding-ding-dingeringeding! Gering-ding-ding-ding-dingeringeding! Gering-ding-ding-ding-dingeringeding!';
    }
}

module.exports = Fox;