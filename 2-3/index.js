const young = { age: 20 };
const adult = { age: 40 };
const elder = { age: 65 };

function whichAge(person) {
  if (person.age <= 30) {
    console.log("first age");
  } else if (person.age <= 60) {
    console.log("second age");
  } else {
    console.log("third age");
  }
}

whichAge(young);
whichAge(adult);
whichAge(elder);
