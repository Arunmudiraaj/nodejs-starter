const routes = require("./routes");
const http = require("http");
console.log(routes.text);
const server = http.createServer(routes.requests);
server.listen(3000);
