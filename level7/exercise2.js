/**
 * BairesDev NodeJS Bootcamp level 7 Exercise 2.
 * Implement an EventEmitter class that will receive an event.
 * 
 * @author  Rodrigo Mady
 * @project NodeJS Bootcamp
 */

const EventController = require("./src/EventController");
const eventController = new EventController();


// Make the first implementation use two different events for connection and disconnection and repeat the test.

let users = [];
eventController.on("connection", (user) => {
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
eventController.emit("connection", "Jorge");
eventController.emit("connection", "Jorge");
eventController.emit("connection", "Jorge");
eventController.emit("disconnection", "Rodrigo");
eventController.emit("disconnection", "Rodrigo");
eventController.emit("connection", "Rodrigo"); 
