const Animal = require("./animal");

class Dog extends Animal {
  say() {
    console.log("Aw Aw");
  }
}

module.exports = Dog;
