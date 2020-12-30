const Animal = require("./animal");

class Fox extends Animal {
  say() {
    console.log("Ring-ding-ding-ding-dingeringeding!");
  }
}

module.exports = Fox;
