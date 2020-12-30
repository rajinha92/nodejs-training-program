const a = [
  30,
  5,
  5,
  18,
  43,
  16,
  21,
  16,
  24,
  4,
  38,
  3,
  18,
  19,
  18,
  42,
  6,
  35,
  38,
  43,
];

function sortNumbers(a, b) {
  if (a > b) return 1;
  if (a < b) return -1;
  if (a === b) return 0;
}

const sortedEven = a.filter((n) => n % 2 === 0).sort(sortNumbers);
const sortedOdd = a.filter((n) => n % 2 !== 0).sort(sortNumbers);

const sorted = sortedEven.concat(sortedOdd);
// OR
// const sorted = [...sortedEven, ...sortedOdd];

console.log(sorted);
