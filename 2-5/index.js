function sum() {
  let total = 0;
  arguments.forEach((a) => {
    if (!(typeof a === "string")) continue; //first requirement
    try {
      const object = JSON.parse(a);
      console.log(object); // second requirement
      if (object.age) total += parseInt(object.age); // third requirement
    } catch (e) {
      continue;
    }
  });

  return total; //third requirement
}

const result = sum(
  15,
  '{"name": "John"}',
  "",
  '{"age": "30"}',
  '{"age": "45"}'
);
console.log(result);
