/**
 * BairesDev NodeJS Bootcamp level 7 Exercise 1.
 * Implement an EventEmitter class that will receive an event.
 * 
 * @author  Rodrigo Mady
 * @project NodeJS Bootcamp
 */

const EventEmitter = require("events");

class EventController extends EventEmitter {}

module.exports = EventController;