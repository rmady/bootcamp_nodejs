const express = require("express")

class UsersController {
    constructor() {

    }

    search(name, users) {
        if (name) {
            let result  = [];
            let regexp  = new RegExp(`${name}\\b`, 'gi');
            return users.filter(({name}) => name.match(regexp));
        } 
        return false;
    }
}

module.exports = UsersController;