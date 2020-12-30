const Person = require("./person");
const person = new Person("John Doe", 32, new Date(), 2);

for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}
