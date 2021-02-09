const http = require('http');

const PORT = process.env.PORT || 8080;

const requestListener = function (req, res) {
  console.log(`${req.method} ${req.url} ${req.body}`);
  res.writeHead(200);
  res.end('');
}

const server = http.createServer(requestListener);
server.listen(PORT);
console.log(PORT);