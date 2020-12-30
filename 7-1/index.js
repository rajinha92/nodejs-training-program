const EventEmitter = require("events");

const events = new EventEmitter();

const online = [];

events.on("connection", (user) => {
  if (online.indexOf(user) === -1) {
    console.log(`${user} connected`);
    online.push(user);
  } else {
    console.log(`${user} disconnected`);
    const index = online.indexOf(user);
    online.splice(index, 1);
  }
});

events.emit("connection", "John");
events.emit("connection", "John");
events.emit("connection", "Mark");
events.emit("connection", "John");
events.emit("connection", "Doe");
events.emit("connection", "Mark");
events.emit("connection", "Doe");
