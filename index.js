const http = require('http');

const PORT = process.env.PORT || 8080;

const requestListener = function (req, res) {
  let data = '';
  req.on('data', chunk => {
    data += chunk;
  })
  req.on('end', () => {
    console.log(`${req.method} ${req.url} ${data}`);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.writeHead(200);
    res.end('');
  });
}

const server = http.createServer(requestListener);
server.listen(PORT);
console.log(PORT);