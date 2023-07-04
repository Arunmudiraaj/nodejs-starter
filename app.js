const http = require("http");
const fs = require("fs");
const { buffer } = require("stream/consumers");
const server = http.createServer((req, res) => {
  const method = req.method;
  // console.log(req.url, req.headers, req.method);
  // process.exit();

  if (req.url === "/") {
    fs.readFile("message.txt", (err, data) => {
      console.log(err);
      console.log(data);
      res.write(
        `<body> <p>${data}</p> <form action='/message' method='POST'> <input type='text' name='text'/> <button type='submit'>Send</button></form></body>`
      );
      return res.end();
    });
  }
  if (req.url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
      console.log(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      fs.writeFile("message.txt", message, (err) => {
        res.statusCode = 302;
        res.setHeader("location", "/");
        return res.end();
      });
    });
  }
});
server.listen(3000);
