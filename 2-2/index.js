const user = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};

function incrementAge(user, amount) {
  user.age += amount;
}
function decrementAge(user, amount) {
  user.age -= amount;
}

incrementAge(user, 5);
console.log(user.age);

decrementAge(user, 10);
console.log(user.age);
