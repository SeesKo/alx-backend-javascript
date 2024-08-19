// Small HTTP server creation
const http = require('http');

// Create an HTTP server
const app = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!');
});

// Make the server listen on port 1245
app.listen(1245, () => {
    console.log('Server running at http://127.0.0.1:1245/');
});

module.exports = app;
