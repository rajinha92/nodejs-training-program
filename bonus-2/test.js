const waitTo = require("./index");

describe("waitTo async function", () => {
  it("should return a promise", (done) => {
    waitTo(900).then(() => done());
  });
});
