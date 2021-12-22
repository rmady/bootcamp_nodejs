/**
 * BairesDev NodeJS Bootcamp level 7 Exercise 1.
 * Implement an EventEmitter class that will receive an event.
 * 
 * @author  Rodrigo Mady
 * @project NodeJS Bootcamp
 */

const EventController = require("./src/EventController");
const eventController = new EventController();


// Implement an EventEmitter class that will receive an event for user connection/disconnection under the same listener. 
// If the user is not connected yet it should print ‘{user} connected’, if the user was previously connected it 
// should print ‘{user} disconnected’. Emit multiple events with some repeated user names to test it.

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
 
 eventController.emit("connection", "Rodrigo"); 
 eventController.emit("connection", "Jorge");
 eventController.emit("connection", "Rodrigo");
 eventController.emit("connection", "Rodrigo");
 eventController.emit("connection", "Jorge");