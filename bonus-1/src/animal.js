class Animal {
  constructor(name, numberOfPaws, gender) {
    this.name = name;
    this.numberOfPaws = numberOfPaws;
    this.gender = gender;
  }

  say() {}

  info() {
    console.log("Name: ", this.name);
    console.log("Number of paws: ", this.numberOfPaws);
    console.log("Gender: ", this.gender);
  }
}

module.exports = Animal;
