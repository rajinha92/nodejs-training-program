const fs = require("fs");

fs.readFile("file.txt", "utf-8", (err, content) => {
  console.log(content.toString());
});

console.log("reading file");
