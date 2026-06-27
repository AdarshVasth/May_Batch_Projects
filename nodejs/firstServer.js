const http = require('http');
const fs = require('fs');
const os = require('os');

const text = fs.readFileSync('demo.txt', 'utf8');
console.log(text);

//fs.unlinkSync('demo.txt');
const server = http.createServer((req, res) => {
  console.log('Request received');
  console.log(os.platform());
  console.log(os.arch());
  console.log(os.cpus());
  console.log(os.freemem());
  console.log(os.totalmem());
  console.log(os.hostname())
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(text);
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});