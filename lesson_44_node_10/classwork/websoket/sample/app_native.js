const express = require('express');
const http = require('http');
const WebSocket = require('ws');
let app = express();
const server = http.createServer(app);
server.listen(8080);

app.use('/', function(req, res, next){
    res.sendFile(__dirname + '/index.html');
});

const wss = new WebSocket.Server({ server });

wss.on('connection', function connection(socket, req) {
    socket.on('message', function incoming(message) {
        console.log('received: %s', message);
    });
    let interval = setInterval(function(){
        socket.send('something');
    }, 5000);

    socket.on('close', function connection(code, reason) {
        clearInterval(interval);
        console.log('dissconect client Code: ' + code);
    });
    socket.on('error', function connection(error) {
        clearInterval(interval);
        console.log('Error: ' + error);
    });
});