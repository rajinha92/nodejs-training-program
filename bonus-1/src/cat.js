const Animal = require("./animal");

class Cat extends Animal {
  say() {
    console.log("Meaw");
  }
}

module.exports = Cat;
