const a = [
  { firstName: "John", lastName: "Doe" },
  { firstName: "Michael", lastName: "Jackson" },
];

const fullNames = a.map((p) => `${p.firstName} ${p.lastName}`);

console.log(fullNames);
