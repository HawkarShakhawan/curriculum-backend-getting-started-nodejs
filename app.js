const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    if (req.url === '/' && req.method === 'GET') {
        // Handle the root endpoint (/)
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end("Welcome to Re:Coded's Backend Bootcamp!");
    } else if (req.url === '/practice' && req.method === 'GET') {
        // Handle the /practice endpoint with a GET request
        res.statusCode = 200;
        
        res.setHeader('Content-Type', 'text/plain');
        res.end("Practice is done!");
    } else {
        // Handle other cases (e.g., 404 Not Found)
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end("404 Not Found");
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = server;
