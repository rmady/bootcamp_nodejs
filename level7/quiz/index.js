/**
 * 1. Implement an EventEmitter class that will receive an event for user connection/disconnection 
 * under the same listener. If the user is not connected yet it should print '{user} connected', if the user 
 * was previously connected it should print '{user} disconnected'. 
 * Emit multiple events with some repeated user names to test it.
 */


const EventController = require('./EventController');
const eventController = new EventController();

let users = [];

eventController.on("connection", (user) => {
    if (users[user] === undefined || users[user] === false) {
        users[user] = true;
        console.log(`${user} connected`);
    } else {
        users[user] = false;
        console.log(`${user} disconnected`);
    }
});

/**
eventController.emit("connection", "Rodrigo");
eventController.emit("connection", "Jorge");
eventController.emit("connection", "Rodrigo");
eventController.emit("connection", "Rodrigo");
eventController.emit("connection", "Jorge");
eventController.emit("connection", "Rodrigo");

/**
 * 2. Make the first implementation use two different events for connection and disconnection and repeat the test.
 */

 eventController.on("connection2", (user) => {
    if (users[user] === undefined || users[user] === false) {
        users[user] = true;
        console.log(`${user} connected`);
    } else {
        console.log(`${user} is already connected`);
    }
});

eventController.on("disconnection", (user) => {
    if (users[user] === undefined || users[user] === true) {
        users[user] = false;
        console.log(`${user} disconnected`);
    } else {
        console.log(`${user} is already disconnected`);
    }
});

eventController.emit("connection2", "Rodrigo");
eventController.emit("connection2", "Jorge");
eventController.emit("disconnection", "Rodrigo");
eventController.emit("disconnection", "Rodrigo");
eventController.emit("disconnection", "Jorge");
eventController.emit("connection2", "Rodrigo");
eventController.emit("connection2", "Rodrigo");
eventController.emit("connection2", "Jorge");
eventController.emit("disconnection", "Rodrigo");
eventController.emit("disconnection", "Rodrigo");
eventController.emit("disconnection", "Jorge");
