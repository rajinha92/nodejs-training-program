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
    const url = new URL(req.headers.host + req.url);
    const name = url.searchParams.get("name");

    const regex = new RegExp(name, "ig");

    const filteredNames = name ? names.filter((n) => n.match(regex)) : names;

    res.end(JSON.stringify(filteredNames));
  }
});

app.listen(3000, () => console.log("started successfully"));
