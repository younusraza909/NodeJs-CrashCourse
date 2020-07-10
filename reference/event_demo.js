const EventEmitter = require("events");

//Create Class
class MyEmitter extends EventEmitter {}

//init Object
const myEmitter = new MyEmitter();

//Event Listner
myEmitter.on("event", () => {
  console.log("Event Fired");
});
myEmitter.on("event21", () => {
  console.log("Event 21 Fired");
});

//Init Event
myEmitter.emit("event");
myEmitter.emit("event");
myEmitter.emit("event");
myEmitter.emit("event21");
