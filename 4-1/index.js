async function getIntegers() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([1, 2, 3, 4, 5, 6]);
    }, 2000);
  });
}

getIntegers().then((integers) => {
  integers.forEach((i) => console.log(i));
  // OR
  /* for (const i of integers) {
    console.log(i);
  } */
});

// OR
/* async function main() {
  const integers = await getIntegers();

  for (const i of integers) {
    console.log(i);
  }
}

main();
 */

// OR if in Node > v14
/* 
 const integers = await getIntegers();

 for (const i of integers) {
   console.log(i);
 } */
