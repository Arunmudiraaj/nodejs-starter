const routes = require("./routes");
const http = require("http");
console.log(routes.text + "h600h 999");
const server = http.createServer(routes.requests);
server.listen(3000);
