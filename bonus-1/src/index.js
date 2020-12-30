const Dog = require("./dog");
const Cat = require("./cat");
const Fox = require("./fox");

const dog = new Dog("Snoop", 4, "male");
const cat = new Cat("Garfield", 4, "male");
const fox = new Fox("Ninetales", 4, "female");

dog.say();
cat.say();
fox.say();
