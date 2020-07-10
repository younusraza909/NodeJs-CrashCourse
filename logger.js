const EventEmitter = require("events");
const uuid = require("uuid");

class Logger extends EventEmitter {
  log(msg) {
    //Call
    this.emit("message", { id: uuid.v4(), msg: msg });
  }
}

// module.exports = Logger;

const logger = new Logger();

logger.on("message", (data) => {
  console.log("Called Listner", data);
});

logger.log("hello world");
