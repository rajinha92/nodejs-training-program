const assert = require("assert");
const Cat = require("./src/cat");
const Dog = require("./src/dog");
const Fox = require("./src/fox");

describe("Test Dog", () => {
  it("should instantiate with props", () => {
    const dog = new Cat("Bruce", 4, "male");
    assert.strictEqual(dog.name, "Bruce");
    assert.strictEqual(dog.numberOfPaws, 4);
    assert.strictEqual(dog.gender, "male");
  });

  it("should implement say method", () => {
    const dog = new Cat("Bruce", 4, "male");
    assert.doesNotThrow(dog.say);
  });

  it("should be instance of Dog", () => {
    const dog = new Dog("Bruce", 4, "male");
    assert.ok(dog instanceof Dog);
  });
});

describe("Test Cat", () => {
  it("should instantiate with props", () => {
    const cat = new Cat("Garfield", 3, "male");
    assert.strictEqual(cat.name, "Garfield");
    assert.strictEqual(cat.numberOfPaws, 3);
    assert.strictEqual(cat.gender, "male");
  });

  it("should implement say method", () => {
    const cat = new Cat("Garfield", 3, "male");
    assert.doesNotThrow(cat.say);
  });

  it("should be instance of Cat", () => {
    const cat = new Cat("Garfield", 3, "male");
    assert.ok(cat instanceof Cat);
  });
});

describe("Test Fox", () => {
  it("should instantiate with props", () => {
    const fox = new Fox("Ninetales", 4, "female");
    assert.strictEqual(fox.name, "Ninetales");
    assert.strictEqual(fox.numberOfPaws, 4);
    assert.strictEqual(fox.gender, "female");
  });

  it("should implement say method", () => {
    const fox = new Fox("Ninetales", 4, "female");
    assert.doesNotThrow(fox.say);
  });

  it("should be instance of Fox", () => {
    const fox = new Fox("Ninetales", 4, "female");
    assert.ok(fox instanceof Fox);
  });
});
