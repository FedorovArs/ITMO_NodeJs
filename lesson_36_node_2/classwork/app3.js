const http = require('http');

const port = 8080;

const server = http.createServer();

server.on('request', function(req, res){
    res.writeHead(200, {
        'Content-Type':'text/plain'
    });
    res.end("Hello client");
});

server.listen(port);