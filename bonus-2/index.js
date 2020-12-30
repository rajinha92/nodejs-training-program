async function waitTo(ms) {
  return new Promise((resolve) => {
    setTimeout(() => resolve("done!"), ms);
  });
}

async function main() {
  const result = await waitTo(1200);
  console.log(result);
}
main();

module.exports = waitTo;
