const user = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};

function greeting(firstName) {
  console.log(`Hello, ${firstName}`);
}

greeting(user.firstName);

// OR
/* 
const user = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};

function greeting(user) {
  console.log(`Hello, ${user.firstName}`);
}

greeting(user); */
