const http = require("http");

const app = http.createServer();

const names = [];

app.on("request", (req, res) => {
  if (req.method === "POST") {
    let body = [];
    req
      .on("data", (chunk) => body.push(chunk))
      .on("end", () => {
        body = Buffer.concat(body).toString();
        const json = JSON.parse(body);
        if (json.name) names.push(json.name);
        res.end();
      });
  } else if (req.method === "GET") {
    res.end(JSON.stringify(names));
  }
});

app.listen(3000, () => console.log("started successfully"));
