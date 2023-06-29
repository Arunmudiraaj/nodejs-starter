const http = require("http");
const server = http.createServer((req, res) => {
  // console.log(req.url, req.headers, req.method);
  // process.exit();
  res.setHeader("Content-Type", "text/html");
  if (req.url === "/home") {
    res.write("<body><h1>Welcome to Home</h2></body>");
    return res.end();
  }
  if (req.url === "/about") {
    res.write("<body><h1>Welcome to about us page</h2></body>");
    return res.end();
  }
  if (req.url === "/node") {
    res.write("<body><h1>Welcome to node</h1></body>");
    return res.end();
  }

  res.write("<html>");
  res.write("<head> <title> My Node Server </title></head>");
  res.write("<body><h1>This is a server</h2></body>");
  res.write("</html>");
  res.end();
});
server.listen(3000);
