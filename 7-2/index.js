const EventEmitter = require("events");

const events = new EventEmitter();

const online = [];

events.on("connect", (user) => {
  if (online.indexOf(user) === -1) {
    console.log(`${user} connected`);
    online.push(user);
  } else {
    console.log(`${user} is already connected`);
  }
});

events.on("disconnect", (user) => {
  const index = online.indexOf(user);
  console.log(`${user} disconnected`);
  online.splice(index, 1);
});

events.emit("connect", "John");
events.emit("connect", "John");
events.emit("connect", "Mark");
events.emit("disconnect", "John");
events.emit("connect", "Doe");
events.emit("disconnect", "Mark");
events.emit("disconnect", "Doe");
